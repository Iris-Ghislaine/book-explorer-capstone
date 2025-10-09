// Load favorites from localStorage, fallback to EMPTY array (Lab 3: API-driven only)
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

console.log('favorites.js loaded! Initial favorites:', favorites); // Debug

// Export the shared array and render function
export { favorites };

export function renderFavorites() { // No param—uses global favorites
    console.log('Rendering favorites...'); // Debug
    const list = document.getElementById('favorites-list');
    const emptyState = document.getElementById('empty-state');
    console.log('List/empty found?', list, emptyState); // Debug
    
    if (!list) {
        console.warn('favorites-list element not found!'); // Safety
        return;
    }
    
    if (favorites.length === 0) {
        list.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    }
    
    if (emptyState) emptyState.classList.add('hidden');
    list.innerHTML = favorites.map(book => `
        <div class="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-105" data-book-id="${book.id}">
            <img src="${book.cover}" alt="${book.title} Cover" class="w-full h-50 object-cover rounded" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x400?text=No+Cover'">
            <h3 class="text-xl font-semibold mt-4">${book.title}</h3>
            <p class="text-gray-600">${book.author}</p>
            <button class="remove-fav mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-300 transition-colors">
                Remove Favorite
            </button>
        </div>
    `).join('');
}

// Remove favorite (updates shared state + localStorage)
export function removeFavorite(id) {
    console.log('Removing ID:', id); // Debug
    favorites = favorites.filter(book => book.id !== id); // String comparison (works for API IDs like "OL123W")
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log('Updated favorites:', favorites); // Debug (should show shorter array)
    renderFavorites();
}

// Event delegation for remove buttons (FIX: String ID, no parseInt)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-fav')) {
        console.log('Remove button clicked!'); // Debug
        const card = e.target.closest('[data-book-id]');
        if (!card) {
            console.error('No card found for remove button!');
            return;
        }
        const bookId = card.dataset.bookId; // String, no parseInt
        console.log('Book ID from data attr:', bookId); // Debug: Should be "OL123W"
        if (bookId) {
            removeFavorite(bookId);
        } else {
            console.error('No book ID found on card!');
        }
    }
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, rendering favorites...'); // Debug
    renderFavorites();
});