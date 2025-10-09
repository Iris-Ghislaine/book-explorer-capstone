# Booksky — Lab 2: DOM Interactivity & JavaScript Modules

## Project Overview
**Booksky** continues to evolve into a functional **Book Explorer Web App**, now enhanced with **JavaScript interactivity**.  
In this lab, the focus was on **DOM manipulation**, **modular JavaScript**, and **data persistence** using the browser’s `localStorage`.

---

## Lab Objectives
**Lab 2:** DOM Interactivity & JavaScript Modules  
**Scenario:** Extend the Book Explorer web app to make it interactive — allowing users to add and remove favorite books dynamically.

### Exercises Completed
#### Exercise 2.1 — Homepage Interactivity
- Added interactive **“Add to Favorites”** buttons for each book card.  
- Integrated **heart icons** that visually represent liked items.  
- Used `localStorage` to persist user selections even after page refresh.

#### Exercise 2.2 — Favorites Page
- Created a separate **Favorites Page (`favorites.html`)**.  
- Dynamically displays all books saved as favorites.  
- Allows users to **remove** books from favorites in real time.  
- Handles empty states gracefully (shows a “No favorites yet...” message).

#### Exercise 2.3 — JavaScript Modules
- Implemented ES6 module structure for better organization:
  - `homepage.js`: Handles rendering and favorite-book logic.
  - `favorites.js`: Manages favorite books list and persistence.
- Shared state managed efficiently across modules.

---

## Screenshots

### Homepage
<img width="1885" height="874" alt="image" src="https://github.com/user-attachments/assets/9c36b103-028e-4758-ab0c-ef0fedc23982" />

<img width="1890" height="884" alt="image" src="https://github.com/user-attachments/assets/a8a525cc-b368-42ad-8412-58163cf26243" />

### Favorites Page
<img width="1892" height="870" alt="image" src="https://github.com/user-attachments/assets/9a133b59-094c-46ac-945d-853eb1a86854" />

<img width="1888" height="872" alt="image" src="https://github.com/user-attachments/assets/3ab7c4aa-e584-49b9-8e45-fe32463d99b0" />

<img width="1888" height="883" alt="image" src="https://github.com/user-attachments/assets/dd37696f-2d0f-4cbd-aa78-ba6152106b88" />


### Local Storage View
<img width="1790" height="767" alt="image" src="https://github.com/user-attachments/assets/a98a9a52-7dc3-42d2-9b3f-87ec3b30348a" />

## Technologies Used
- **HTML5**
- **CSS3 (Tailwind CSS for styling consistency)**
- **Vanilla JavaScript (ES6 Modules)**
- **Local Storage API**
  
## Key Features
- Dynamic **book card rendering**
- **Add / Remove Favorites** functionality
- Persistent data storage using `localStorage`
- **Modular JavaScript** with import/export
- Instant **DOM updates** without page reload
- **Responsive UI** compatible with multiple screen sizes

## Project Structure

Lab2/
>│
>├── index.html # Homepage
>├── favorites.html # Favorites page
>│
>├── js/
>│ ├── homepage.js # Homepage interactivity
>│ └── favorites.js # Favorites logic & storage
>└── img/ # all book covers


##  How to Run the Project
1. Open `index.html` in your browser.  
2. Click **“Add to Favorites”** on any book.  
3. Navigate to `favorites.html` to view your saved books.  
4. Remove favorites dynamically using the remove button.  
5. Refresh the page — your data persists via `localStorage`.

## Status
**Project Completed** — All Lab 2 objectives successfully implemented.

