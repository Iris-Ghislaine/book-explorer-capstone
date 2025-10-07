// fetchBooks.js: Handles API calls to Open Library
const API_BASE = 'https://openlibrary.org';
const COVER_BASE = 'https://covers.openlibrary.org/b/id/';
const PLACEHOLDER_COVER = 'https://via.placeholder.com/300x400?text=No+Cover'; // External fallback

// Async function: Fetches books by search query 
export async function fetchBooks(query = 'fiction', limit = 20) {
    console.log(`Fetching books for query: "${query}"`); // Debug
    
    try {
        const url = `${API_BASE}/search.json?q=${encodeURIComponent(query)}&limit=${limit}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('API response:', data); // Debug
        
        const books = data.docs.map(doc => ({
            id: doc.key ? doc.key.replace('/works/', '') : `book-${Math.random()}`,
            title: doc.title || 'Untitled',
            author: doc.author_name ? doc.author_name[0] : 'Unknown Author', // Direct name array (rich)
            cover: doc.cover_i ? `${COVER_BASE}${doc.cover_i}-M.jpg` : PLACEHOLDER_COVER,
            // description: doc.first_sentence || doc.subtitle || 'No description available.' // Often available
        }));
        
        console.log('Normalized books:', books); // Debug
        return books;
        
    } catch (error) {
        console.error('Fetch error:', error);
        alert(`Failed to fetch books: ${error.message}. Showing cached favorites instead.`);
        const errorDiv = document.getElementById('error-message');
        if (errorDiv) {
            errorDiv.classList.remove('hidden');
            setTimeout(() => errorDiv.classList.add('hidden'), 5000);
        }
        return [];
    }
}

// Fetch trending
export async function fetchTrendingBooks(subject = 'fiction', limit = 20) {
    console.log(`Fetching trending books for subject: "${subject}"`);
    
    try {
        const url = `${API_BASE}/subjects/${subject}.json?limit=${limit}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('Trending API response:', data); // Debug – Check work.authors[0].name
        
        // Normalize works
        const books = data.works
            .filter(work => work && work.title && work.authors && work.authors.length > 0) // Skip invalid/no authors
            .map(work => {
                const authorName = work.authors[0].name || 'Unknown Author'; 
                
                return {
                    id: work.key ? work.key.replace('/works/', '') : `book-${Math.random()}`,
                    title: work.title || 'Untitled',
                    author: authorName, 
                    cover: work.cover_id ? `${COVER_BASE}${work.cover_id}-M.jpg` : PLACEHOLDER_COVER,
                    // description: (work.excerpts && work.excerpts[0] && work.excerpts[0].text) ? work.excerpts[0].text : 'No description available.'
                };
            });
        
        console.log('Normalized trending books:', books); 
        return books;
        
    } catch (error) {
        console.error('Trending fetch error:', error);
        alert(`Failed to fetch trending books: ${error.message}`);
        return [];
    }
}