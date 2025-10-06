// Hardcoded data for favorites (array of objects)
const hardcodedFavorites = [
    { id: 1, title: 'Lightfall', author: 'Tim Probert', cover: '/img/B_7.jpg' },
    { id: 2, title: 'They Both Die at the End ', author: 'Adam Silvera', cover: '/img/B_1.jpg' },
    { id: 3, title: 'Together Once More', author: 'Riesy Syuhada', cover: '/img/B_2.jpg' }
];

// Function to render favorites to the DOM
export function renderFavorites(favorites = hardcodedFavorites) {
    const list = document.getElementById('favorites-list');
    const emptyState = document.getElementById('empty-state');
    
    if (favorites.length === 0) {
        list.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }
    
    emptyState.classList.add('hidden');
    list.innerHTML = favorites.map(book => `
        <div class="bg-white shadow-md rounded-lg p-4" data-book-id="${book.id}">
            <img src="${book.cover}" alt="${book.title} Cover" class="w-full h-48 object-cover rounded">
            <h3 class="text-xl font-semibold mt-4">${book.title}</h3>
            <p class="text-gray-600">${book.author}</p>
            <button class="remove-fav mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Remove Favorite</button>
        </div>
    `).join(''); // Map to HTML strings, join to avoid commas
}
// Initial render on page load
document.addEventListener('DOMContentLoaded', () => {
    renderFavorites();
});
// Function to remove a favorite
export function removeFavorite(id) {
    const updated = hardcodedFavorites.filter(book => book.id !== id);
    renderFavorites(updated);
    Object.assign(hardcodedFavorites, updated);
}
// Event delegation for remove buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-fav')) {
        const bookId = parseInt(e.target.closest('[data-book-id]').dataset.bookId);
        removeFavorite(bookId);
    }
});