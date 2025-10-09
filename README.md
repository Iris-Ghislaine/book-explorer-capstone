# Booksky — Book Explorer Web App

## Project Overview
**Booksky** is a dynamic **Book Explorer Web App** that allows users to **discover, search, and manage favorite books**.  
The project evolves through multiple labs to integrate **HTML, CSS, JavaScript, DOM interactivity, API integration, and data persistence**.

---

## Features Overview
- **Dynamic Homepage:** Browse trending books and search by title.  
- **Favorites Management:** Add and remove favorite books with **localStorage persistence**.  
- **API Integration:** Fetch real-time data using the **Open Library API**.  
- **Responsive UI:** Works seamlessly across desktops, tablets, and mobile screens.  
- **Interactive Experience:** Smooth DOM updates, loading states, and empty state handling.

---

## Lab Progression

### Lab 1 — HTML & CSS Structure
- Set up **static homepage and favorites page**.  
- Designed **book cards, navigation bar, and grid layout** using Tailwind CSS.  
- Established **basic page structure and assets management**.

### Lab 2 — DOM Interactivity & JavaScript Modules
- Added **interactive Add to Favorites buttons**.  
- Implemented **favorites page** that dynamically updates in real time.  
- Used **ES6 modules** to organize JavaScript:
  - `homepage.js` for rendering and favorites logic.
  - `favorites.js` for favorites management and persistence.  
- Stored user preferences in **localStorage**.

### Lab 3 — Async JavaScript & API Integration
- Integrated **Open Library API** to fetch real book data.  
- Implemented **async/await** for asynchronous requests.  
- Added **search functionality** with real-time results.  
- Maintained dynamic **favorites management** with API data.  
- Enhanced user experience with **loading spinners** and **empty state messages**.

## Technologies Used
- **HTML5**
- **CSS3 (Tailwind CSS)**
- **Vanilla JavaScript (ES6 Modules & Async/Await)**
- **Local Storage API**
- **Open Library API**


## Project Structure

Booksky/
>│
>├── index.html # Homepage
>├── favorites.html # Favorites page
>├── about.html # About page
>│
>├── js/
>│ ├── fetchBooks.js # API module
>│ ├── homepage.js # Homepage logic & search
>│ └── favorites.js # Favorites page logic & persistence
>│
>└── img/ # Book covers and fallback images

## How to Run the Project
1. Clone or download the repository.  
2. Open `index.html` in your browser.  
3. Browse trending books or search by title.  
4. Click **“Add to Favorites”** on any book.  
5. Navigate to `favorites.html` to view saved books.  
6. Remove favorites dynamically — data persists via `localStorage`.

## Screenshots

### Homepage
<img width="1889" height="884" alt="Screenshot 2025-10-09 100655" src="https://github.com/user-attachments/assets/87bfe782-cd4a-4e95-a0c6-3d0b42cfe776" />
<img width="1897" height="879" alt="Screenshot 2025-10-09 101118" src="https://github.com/user-attachments/assets/41b7847e-9b6a-44c0-8953-2133bf17f5a8" />


### Search Results
<img width="1741" height="494" alt="Screenshot 2025-10-09 100736" src="https://github.com/user-attachments/assets/fd0432ba-06a0-4f73-8ad7-8402c47f78aa" />
<img width="1890" height="886" alt="Screenshot 2025-10-09 100939" src="https://github.com/user-attachments/assets/b52efa72-a259-468e-96c7-bad96741b6fb" />

### Favorites Page
<img width="1859" height="795" alt="Screenshot 2025-10-09 091702" src="https://github.com/user-attachments/assets/c177f051-3ff8-4e65-b43c-06ec00cd6721" />
<img width="1793" height="726" alt="Screenshot 2025-10-09 101427" src="https://github.com/user-attachments/assets/f241e97a-901b-41bc-94ad-752f7226494b" />

### Local Storage View
<img width="1793" height="726" alt="Screenshot 2025-10-09 101427" src="https://github.com/user-attachments/assets/f279915f-e640-483c-870e-f5cc55c6f843" />

## Status
**Project Completed** — All objectives for Labs 1, 2, and 3 successfully implemented.

## Future Enhancements
- Implement **pagination** for large API results.  
- Add **user authentication** for personalized book collections.  
- Include **book details modal** with descriptions and ratings.  
- Improve **dark mode toggle** and accessibility features.
