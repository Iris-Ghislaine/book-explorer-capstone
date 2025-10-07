// Load favorites from localStorage, fallback to initial data
let favorites = JSON.parse(localStorage.getItem('favorites')) || [
    { 
        id: 1, 
        title: 'They Both Die at the End', 
        author: 'Adam Silvera', 
        cover: '/img/B_1.jpg', 
        description: 'On the last day of their lives, two teens connect in a world where death is foretold, racing against time to make memories that last forever.' 
    },
    { 
        id: 2, 
        title: 'Lightfall', 
        author: 'Series by Tim Probert', 
        cover: '/img/B_7.jpg', 
        description: 'A young cave-dwelling mushroom and a brave bat embark on an epic quest through a glowing underground world full of adventure and mystery.' 
    },
    { 
        id: 3, 
        title: 'Together Once More', 
        author: 'Ay riesy Syuhada', 
        cover: '/img/B_2.jpg', 
        description: 'Separated by fate, two souls reunite in a heartfelt tale of love, loss, and the unbreakable bonds that pull us back to where we belong.' 
    }
];
console.log('favorites.js loaded! Initial favorites:', favorites); //for Debugging
// Export the shared array and render function
export { favorites };
export function renderFavorites() { // No param—uses global favorites
    console.log('Rendering favorites...'); // Debug
    const list = document.getElementById('favorites-list');
    const emptyState = document.getElementById('empty-state');
    console.log('List/empty found?', list, emptyState); // Debug
    
    if (favorites.length === 0) {
        list.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }
    
    emptyState.classList.add('hidden');
    list.innerHTML = favorites.map(book => `
        <div class="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-105" data-book-id="${book.id}">
            <img src="${book.cover}" alt="${book.title} Cover" class="w-full h-50 object-cover rounded">
            <h3 class="text-xl font-semibold mt-4">${book.title}</h3>
            <p class="text-gray-600">${book.author}</p>
            <p class="text-sm text-gray-500 mt-2 line-clamp-3">${book.description}</p>
            <button class="remove-fav mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-300 transition-colors">
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
        console.log('Remove button clicked!'); // for Debugging
        const bookId = parseInt(e.target.closest('[data-book-id]').dataset.bookId);
        removeFavorite(bookId);
    }
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, rendering favorites...'); // Debug
    renderFavorites();
});