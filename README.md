# Booksky — Lab 3: Async JavaScript & API Integration

## Project Overview
**Booksky** continues to evolve into a functional **Book Explorer Web App**, now enhanced with **API integration** and **asynchronous JavaScript**.  
In this lab, the focus was on **fetching real book data**, **async/await**, and **dynamic UI updates**.

## Lab Objectives
**Lab 3:** Async JavaScript & API Integration  
**Scenario:** Extend the Book Explorer web app to fetch real book data from the **Open Library API**, dynamically render it, and allow favorites management with persistence.

### Exercises Completed
#### Exercise 3.1 — API Module
- Created `fetchBooks.js` module to fetch books using **fetch** and **async/await**.  
- Functions implemented:  
  - `fetchBooks(query, limit)`: Search books by title.  
  - `fetchTrendingBooks(subject, limit)`: Get trending books by subject.  
- Normalized API responses to return `id`, `title`, `author`, and `cover` for each book.

#### Exercise 3.2 — Populate Homepage
- Dynamically rendered books on homepage grid with cover, title, author, and **“Add to Favorites”** buttons.  
- Implemented **fallback image** for books without covers.  
- Maintained global state (`currentBooks`) to track fetched books for favorites functionality.

#### Exercise 3.3 — Search Functionality
- Added search bar to fetch books by user query.  
- On submit, `fetchBooks(query)` is called and homepage grid updates in real time.  
- Included **loading spinner** and **empty state messages** for better UX.

#### Exercise 3.4 — Favorites Management
- Users can add books to favorites from homepage.  
- Favorites are stored in **localStorage** and displayed on `favorites.html`.  
- Books can be removed dynamically with immediate UI updates.  
- Empty favorites list shows: *“No favorites yet. Add some from the homepage!”*

## Screenshots

### Homepage
<img width="1889" height="884" alt="image" src="https://github.com/user-attachments/assets/ea26a909-4921-4583-824f-85f4e87ed693" />
<img width="1887" height="885" alt="image" src="https://github.com/user-attachments/assets/dd194277-8c19-4c72-8266-609469a8c926" />

### Search Results
<img width="1741" height="494" alt="image" src="https://github.com/user-attachments/assets/33a29557-e58a-4e16-8adf-d086e3cef0c8" />
<img width="1890" height="886" alt="image" src="https://github.com/user-attachments/assets/443fb4c8-f65b-4aa0-a899-dfc4d2022e41" />

### Favorites Page
<img width="1880" height="876" alt="image" src="https://github.com/user-attachments/assets/fd0cc70c-03d8-4802-90ac-0e70f71d60af" />

### Local Storage View
<img width="1793" height="726" alt="image" src="https://github.com/user-attachments/assets/01e4cb55-083d-4c51-b450-747bcb3e7bd9" />

## Technologies Used
- **HTML5**
- **CSS3 (Tailwind CSS for styling consistency)**
- **Vanilla JavaScript (ES6 Modules + Async/Await)**
- **Local Storage API**
- **Open Library API**

## Key Features
- Dynamic **book fetching** from API
- Async **fetch + await** integration
- **Add / Remove Favorites** functionality
- Persistent favorites via `localStorage`
- Loading and empty states for **better UX**
- **Responsive UI** compatible with multiple screen sizes

## Project Structure

Lab3/
>│
>├── index.html # Homepage
>├── favorites.html # Favorites page
>├── about.html # About page
>│
>├── js/
>│ ├── fetchBooks.js # API module
>│ ├── homepage.js # Homepage rendering & search logic
>│ └── favorites.js # Favorites page rendering & persistence
>│
>└── img/ # background images

---

## How to Run the Project
1. Open `index.html` in your browser.  
2. Browse trending books or search by title.  
3. Click **“Add to Favorites”** on any book.  
4. Navigate to `favorites.html` to view your saved books.  
5. Remove favorites dynamically using the remove button.  
6. Refresh the page — your data persists via `localStorage`.

## Status
**Project Completed** — All Lab 3 objectives successfully implemented.
