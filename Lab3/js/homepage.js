// homepage.js: Handles homepage rendering, search, and favorites integration
// Import API functions and shared favorites
import { fetchBooks, fetchTrendingBooks } from './fetchBooks.js';
import { favorites, renderFavorites } from './favorites.js';

// Cache for current books (from API/search)
let currentBooks = []; // Cache fetched books for search/filtering

console.log('homepage.js loaded!');

// Updated render: Takes books param (from API), handles loading/empty states
export function renderHomepageBooks(books = []) {
    console.log('Rendering homepage books...');
    const grid = document.querySelector('#books-grid');
    const spinner = document.getElementById('loading-spinner');
    
    if (!grid) return;
    
    // Hide spinner after first render
    if (spinner) {
        spinner.style.display = 'none';
    }
    
    const placeholderSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIENvdmVyPC90ZXh0Pjwvc3ZnPg=='; // Define outside template
    
    grid.innerHTML = books.length > 0 
        ? books.map(book => `
            <div class="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-105" data-book-id="${book.id}">
                <img src="${book.cover}" alt="${book.title} Cover" class="w-full h-50 object-cover rounded" onerror="this.onerror=null; this.src='${placeholderSrc}'">
                <h3 class="text-xl font-semibold mt-4">${book.title}</h3>
                <p class="text-gray-600">${book.author}</p>
                <p class="text-sm text-gray-500 mt-2 line-clamp-3">${book.description}</p>
                <button class="add-fav mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Add to Favorites
                </button>
            </div>
        `).join('')
        : '<p class="col-span-full text-center text-gray-500">No books found.</p>'; // Empty state
}

// Add to favorites: Handles API books (string IDs), prevents duplicates
export function addToFavorites(book) {
    console.log('addToFavorites called with:', book);
    // Use API id or generate from title (for uniqueness)
    const bookId = book.id || book.title.toLowerCase().replace(/\s+/g, '-');
    if (!favorites.some(fav => fav.id === bookId)) {
        const bookToAdd = { ...book, id: bookId }; // Ensure ID
        favorites.push(bookToAdd);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        console.log('Added to favorites array:', favorites);
        alert(`${book.title} added to favorites!`);
    } else {
        alert(`${book.title} is already in your favorites!`);
    }
}

// Event delegation for "Add to Favorites" buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-fav')) {
        console.log('Add button clicked!');
        const bookId = e.target.closest('[data-book-id]').dataset.bookId;
        const book = currentBooks.find(b => b.id === bookId);
        if (book) {
            addToFavorites(book);
        } else {
            console.log('Book not found for ID:', bookId);
        }
    }
});

// Search handler: Form submit → async fetch and re-render
export function initSearch() {
    const form = document.getElementById('searchForm');
    const input = document.getElementById('searchInput');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Stop page reload
        const query = input.value.trim();
        if (!query) return; // Skip empty
        
        console.log('Searching for:', query);
        // Show spinner again
        const spinner = document.getElementById('loading-spinner');
        if (spinner) spinner.style.display = 'flex';
        
        const books = await fetchBooks(query);
        currentBooks = books; // Update cache
        renderHomepageBooks(books);
    });
}

// Initial load: Try trending, fallback to search if fails
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM loaded, fetching books...');
    let books = [];
    try {
        books = await fetchTrendingBooks('fiction'); // Try trending
    } catch (error) {
        console.error('Trending failed, falling back to search:', error);
        books = await fetchBooks('fiction'); // Fallback to search
    }
    currentBooks = books;
    renderHomepageBooks(books);
    initSearch(); // Wire search
});