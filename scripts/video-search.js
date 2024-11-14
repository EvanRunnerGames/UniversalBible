// Get elements
const searchBar = document.querySelector('.videos-search-bar');
const videoTitles = document.querySelectorAll('.video-title');

// Function to filter video titles based on search input
function filterVideos() {
    const query = searchBar.value.toLowerCase(); // Get the search query and convert to lowercase
    videoTitles.forEach(title => {
        const titleText = title.textContent.toLowerCase(); // Get the title text and convert to lowercase
        if (titleText.includes(query)) {
            // Show the video if the title includes the search query
            title.closest('.video-chooser').style.display = 'block';
        } else {
            // Hide the video if the title doesn't match the search query
            title.closest('.video-chooser').style.display = 'none';
        }
    });
}

// Add event listener for when the user types in the search bar
searchBar.addEventListener('input', filterVideos);
