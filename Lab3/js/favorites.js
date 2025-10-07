// Load favorites from localStorage, if empty fallback to an empty array 
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

console.log('favorites.js loaded! Initial favorites:', favorites); // Debug

// Export the shared array and render function
export { favorites };

export function renderFavorites() { 
    console.log('Rendering favorites...'); // Debug
    const list = document.getElementById('favorites-list');
    const emptyState = document.getElementById('empty-state');
    console.log('List/empty found?', list, emptyState); // Debug
    
    if (!list) {
        console.warn('favorites-list element not found!'); // Safety log
        return;
    }
    
    if (favorites.length === 0) {
        list.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden'); // Null-safe
        return;
    }
    
    if (emptyState) emptyState.classList.add('hidden'); // Null-safe
    list.innerHTML = favorites.map(book => `
        <div class="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-105" data-book-id="${book.id}">
            <img src="${book.cover}" alt="${book.title} Cover" class="w-full h-50 object-cover rounded">
            <h3 class="text-xl font-semibold mt-4">${book.title}</h3>
            <p class="text-gray-600">${book.author}</p>
            <p class="text-sm text-gray-500 mt-2 line-clamp-3">${book.description}</p>
            <button class="remove-fav mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                Remove Favorite
            </button>
        </div>
    `).join('');
}

// Remove favorite (updates shared state + localStorage)
export function removeFavorite(id) {
    console.log('Removing ID:', id); // Debug
    favorites = favorites.filter(book => book.id !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log('Updated favorites:', favorites); // Debug
    renderFavorites();
}

// Event delegation for remove buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-fav')) {
        console.log('Remove button clicked!'); // Debug
        const bookId = parseInt(e.target.closest('[data-book-id]').dataset.bookId);
        removeFavorite(bookId);
    }
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, rendering favorites...'); // Debug
    renderFavorites();
});