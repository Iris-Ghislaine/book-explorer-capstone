// fetchBooks.js: Handles API calls to Open Library
const API_BASE = 'https://openlibrary.org';
const COVER_BASE = 'https://covers.openlibrary.org/b/id/';
const PLACEHOLDER_COVER = 'https://via.placeholder.com/300x400?text=No+Cover'; // External fallback (like colleague)

// Async function: Fetches books by search query (Exercise 3.1-3.3)
export async function fetchBooks(query = 'fiction', limit = 20) { // Default to 'fiction' for better results
    console.log(`Fetching books for query: "${query}"`); // Debug
    
    try {
        // Build URL: e.g., ?q=harry+potter&limit=20 (search.json)
        const url = `${API_BASE}/search.json?q=${encodeURIComponent(query)}&limit=${limit}`;
        const response = await fetch(url); // Async fetch
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json(); // Parse JSON
        console.log('API response:', data); // Debug
        
        // Normalize: Map API docs to our book format (FIX: Use doc.cover_i like colleague)
        const books = data.docs.map(doc => ({
            id: doc.key ? doc.key.replace('/works/', '') : `book-${Math.random()}`, // Unique ID (fallback random)
            title: doc.title || 'Untitled',
            author: doc.author_name ? doc.author_name[0] : 'Unknown Author', // First author
            cover: doc.cover_i ? `${COVER_BASE}${doc.cover_i}-M.jpg` : PLACEHOLDER_COVER, // FIX: cover_i for search
            description: doc.first_sentence || doc.subtitle || 'No description available.'
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

// Fetch trending/popular books (FIX: Null-safe map to prevent undefined errors)
export async function fetchTrendingBooks(subject = 'fiction', limit = 20) {
    console.log(`Fetching trending books for subject: "${subject}"`);
    
    try {
        const url = `${API_BASE}/subjects/${subject}.json?limit=${limit}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('Trending API response:', data);
        
        // Normalize works (FIX: Filter undefined, safe author like colleague)
        const books = data.works
            .filter(work => work) // Skip undefined works
            .map(work => ({
                id: work.key ? work.key.replace('/works/', '') : `book-${Math.random()}`,
                title: work.title || 'Untitled',
                author: (work.authors && work.authors[0] && work.authors[0].author && work.authors[0].author.key) 
                    ? work.authors[0].author.key.replace('/authors/', '').split('/').pop() 
                    : 'Unknown Author', // Deep null-safe extraction
                cover: work.cover_id ? `${COVER_BASE}${work.cover_id}-M.jpg` : PLACEHOLDER_COVER, // cover_id for subjects
                description: (work.excerpts && work.excerpts[0] && work.excerpts[0].text) ? work.excerpts[0].text : 'No description available.'
            }));
        
        console.log('Normalized trending books:', books);
        return books;
        
    } catch (error) {
        console.error('Trending fetch error:', error);
        alert(`Failed to fetch trending books: ${error.message}`);
        return [];
    }
}