const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');
searchIcon.addEventListener('click', () => {
  searchInput.style.width = '200px';
  searchInput.focus();       
});
