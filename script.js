// Primary API — catfact.ninja is reliable and doesn't require an API key
const API_URL = "https://catfact.ninja/facts?limit=30";
const factText = document.getElementById('fact-text');
const fetchBtn = document.getElementById('fetch-btn');
const loading = document.getElementById('loading');
const errorDiv = document.getElementById('error');

let factsCache = [];

/**
 * Fetches cat facts from the API.
 * Caches facts locally so subsequent clicks are instant.
 */
async function fetchFacts() {
    showLoading(true);
    showError(false);

    try {
        if (factsCache.length === 0) {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            // catfact.ninja wraps facts in a "data" array with { fact, length } objects
            factsCache = data.data || [];

            if (factsCache.length === 0) {
                throw new Error('No facts found in response');
            }
        }

        displayRandomFact();
    } catch (err) {
        console.error("Fetch error:", err);
        showError(true);
    } finally {
        showLoading(false);
    }
}

/**
 * Picks a random fact from the cached list and displays it.
 */
function displayRandomFact() {
    if (factsCache.length > 0) {
        const randomIndex = Math.floor(Math.random() * factsCache.length);
        const factObj = factsCache[randomIndex];

        // catfact.ninja returns { fact: "...", length: N }
        const text = typeof factObj === 'string' ? factObj : factObj.fact;

        if (text) {
            factText.textContent = text;
        } else {
            factText.textContent = "Found a fact, but it had no text. Try again!";
        }
    }
}


function showLoading(show) {
    loading.classList.toggle('hidden', !show);
    if (show) {
        factText.classList.add('hidden');
    } else {
        factText.classList.remove('hidden');
    }
}

function showError(show) {
    errorDiv.classList.toggle('hidden', !show);
    if (show) {
        factText.textContent = "";
        factText.classList.add('hidden');
    }
}

fetchBtn.addEventListener('click', () => {
    if (factsCache.length > 0) {
        displayRandomFact();
    } else {
        fetchFacts();
    }
});

window.addEventListener('DOMContentLoaded', fetchFacts);
