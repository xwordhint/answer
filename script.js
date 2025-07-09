// JavaScript for crossword solver blog site

// DOM elements
const searchInput = document.createElement('input');
const searchButton = document.createElement('button');
const searchResults = document.createElement('div');

// Initialize search functionality
function initSearch() {
  // Create search elements
  searchInput.type = 'text';
  searchInput.placeholder = 'Search crossword clues...';
  searchInput.id = 'search-input';
  
  searchButton.textContent = 'Search';
  searchButton.id = 'search-button';
  
  searchResults.id = 'search-results';
  searchResults.style.display = 'none';
  
  // Add search elements to header
  const header = document.querySelector('header');
  const searchContainer = document.createElement('div');
  searchContainer.id = 'search-container';
  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);
  header.appendChild(searchContainer);
  
  // Add search results container to main
  document.querySelector('main').prepend(searchResults);
  
  // Event listeners
  searchButton.addEventListener('click', handleSearch);
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') handleSearch();
  });
}

// Handle search functionality
function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();
  
  if (query === '') {
    searchResults.innerHTML = '<p>Please enter a search term</p>';
    searchResults.style.display = 'block';
    return;
  }
  
  // In a real implementation, this would fetch from an API
  // For now, we'll simulate search results
  const articles = Array.from(document.querySelectorAll('main li'));
  const matches = articles.filter(article => {
    return article.textContent.toLowerCase().includes(query);
  });
  
  if (matches.length === 0) {
    searchResults.innerHTML = '<p>No results found for "' + query + '"</p>';
  } else {
    searchResults.innerHTML = '<h3>Search Results:</h3>';
    matches.forEach(match => {
      const resultItem = match.cloneNode(true);
      searchResults.appendChild(resultItem);
    });
  }
  
  searchResults.style.display = 'block';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initSearch);