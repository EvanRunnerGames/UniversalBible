// Get the search bar element
const searchBar = document.getElementById('searchBar');

// Add an event listener to the search bar to listen for input
searchBar.addEventListener('input', function() {
    // Get the search term and convert it to lowercase for case-insensitive search
    const searchTerm = searchBar.value.toLowerCase();

    // Get all the menu section containers
    const menuSections = document.querySelectorAll('.menu-section-container');

    // Loop through each menu section and check if it matches the search term
    menuSections.forEach(function(section) {
        // Get the text content from the title of each translation section
        const translationTitle = section.querySelector('.translation-title').textContent.toLowerCase();

        // If the translation title includes the search term, show it, otherwise hide it
        if (translationTitle.includes(searchTerm)) {
            section.style.display = 'block'; // Show section
        } else {
            section.style.display = 'none'; // Hide section
        }
    });
});
