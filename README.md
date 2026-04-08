# 🐾 Cat Facts Explorer

A beautifully designed, simple web application that fetches and displays random cat facts retrieved from a public API. 

## Features
- **Instant Random Facts**: Fetches facts from an external API and caches them locally for lightning-fast display.
- **Responsive UI**: A modern, clean interface styled with custom CSS and Google Fonts (Outfit).
- **Graceful Error Handling**: Fallbacks and visual cues added to ensure a smooth user experience in case of API request failures.
- **Loading State Indicator**: Friendly messages visible while fetching data.

## Technologies Used
- **HTML5**: For the application's structure.
- **CSS3**: For custom styling, animations, and responsive layout.
- **Vanilla JavaScript**: To manage the asynchronous API calls, caching, and DOM manipulation.
- **API**: Uses `https://catfact.ninja/facts` as a fast and reliable source for cat facts without requiring API keys.

## Quick Start
You don't need any build steps to run this project. Simply open the `index.html` file in any modern web browser to start exploring cat facts.

1. Clone or download this repository.
2. Navigate to the project directory.
3. Open `index.html` in your browser.

## How It Works
- On page load, the JavaScript fetches a batch of facts (up to 30) from the `catfact.ninja` API and saves them into a local array called `factsCache`.
- When the "Get New Fact" button is clicked, it instantly picks a random fact from the cache preventing unnecessary additional network requests.
- If the cache is empty or a network error occurs, appropriate error handling prompts the user.
