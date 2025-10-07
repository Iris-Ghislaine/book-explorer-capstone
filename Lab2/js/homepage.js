// homepageBooks array (your data, unchanged)
const homepageBooks = [
  {
    id: 1,
    title: "They Both Die at the End",
    author: "Adam Silvera",
    cover: "/img/B_1.jpg",
    description:
      "On the last day of their lives, two teens connect in a world where death is foretold, racing against time to make memories that last forever.",
  },
  {
    id: 2,
    title: "Lightfall",
    author: "Series by Tim Probert",
    cover: "/img/B_7.jpg",
    description:
      "A young cave-dwelling mushroom and a brave bat embark on an epic quest through a glowing underground world full of adventure and mystery.",
  },
  {
    id: 3,
    title: "Together Once More",
    author: "Ay riesy Syuhada",
    cover: "/img/B_2.jpg",
    description:
      "Separated by fate, two souls reunite in a heartfelt tale of love, loss, and the unbreakable bonds that pull us back to where we belong.",
  },
  {
    id: 4,
    title: "The New Girl",
    author: "Cassandra Calin",
    cover: "/img/B_5.jpg",
    description:
      "A shy newcomer navigates high school drama, friendships, and self-discovery in this charming graphic novel about finding your place in the world.",
  },
  {
    id: 5,
    title: "The Shattered Vows",
    author: "Lily Adellea",
    cover: "/img/B_3.jpg",
    description:
      "In a kingdom of broken promises, a warrior princess must confront her past to forge a new path amid betrayal, magic, and forbidden romance.",
  },
  {
    id: 6,
    title: "The Sun Will Come Out",
    author: "Joanne Levy",
    cover: "/img/B_6.jpg",
    description:
      "A young girl faces the challenges of camp life and budding crushes, learning that even on cloudy days, joy and connection can break through.",
  },
  {
    id: 7,
    title: "Her Blue Sky",
    author: "Mari Okada, Naohito Takahashi",
    cover: "/img/B_8.jpg",
    description:
      "Twin sisters in a quiet town grapple with dreams, regrets, and a mysterious visitor from the past in this poignant anime-inspired story of growth.",
  },
  {
    id: 8,
    title: "Lightfall",
    author: "Tim Probert",
    cover: "/img/B_7.jpg",
    description:
      "Delving deeper into the shadowy realms, heroes uncover ancient secrets and face trials that test the limits of courage and friendship.",
  },
];

console.log("homepage.js loaded!"); // Debug: Confirms load

// Import shared favorites (from favorites.js)
import { favorites, renderFavorites } from "./favorites.js"; // This shares state!

// Render homepage books (fixed selector, added description)
export function renderHomepageBooks(books = homepageBooks) {
  console.log("Rendering homepage books..."); // Debug
  const grid = document.querySelector("#books-grid"); // Fixed: Use ID
  console.log("Grid found?", grid); // Debug: Should not be null
  if (!grid) return; // if empty, we stop by here

  grid.innerHTML = books
    .map(
      (book) => `
        <div class="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-105" data-book-id="${book.id}">
            <img src="${book.cover}" alt="${book.title} Cover" class="w-full h-50 object-cover rounded">
            <h3 class="text-xl font-semibold mt-4">${book.title}</h3>
            <p class="text-gray-600">${book.author}</p>
            <p class="text-sm text-gray-500 mt-2 line-clamp-3">${book.description}</p>
            <button class="add-fav mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Add to Favorites
            </button>
        </div>
    `
    )
    .join('');
}

// Real add to favorites (uses shared state + localStorage)
export function addToFavorites(book) {
  console.log("addToFavorites called with:", book); // Debug
  if (!favorites.some((fav) => fav.id === book.id)) {
    // Avoid duplicates
    favorites.push(book);
    localStorage.setItem("favorites", JSON.stringify(favorites)); 
    console.log("Added to favorites array:", favorites); // Debug
    alert(`${book.title} added to favorites! Check the Favorites page.`);
    // Optional: Re-render favorites if on favorites page (but since separate, just navigate)
  } else {
    alert(`${book.title} is already in your favorites!`);
  }
}

// Event delegation for add buttons
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-fav")) {
    console.log("Add button clicked!"); // Debug
    const bookId = parseInt(e.target.closest("[data-book-id]").dataset.bookId);
    const book = homepageBooks.find((b) => b.id === bookId);
    if (book) {
      addToFavorites(book);
    } else {
      console.log("Book not found for ID:", bookId); // Debug
    }
  }
});

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, rendering..."); // Debug
  renderHomepageBooks();
});
