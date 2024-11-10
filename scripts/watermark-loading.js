// Wait for the page to load before running the script
window.onload = function() {
    // Get the element by its ID
    var watermark = document.getElementById('watermark-intro');
    
    // Check if the element exists
    if (watermark) {
        // Set the initial opacity to 1
        watermark.style.opacity = 1;
        
        // Start the fade-out effect after 1 second
        setTimeout(function() {
            // Apply the fade-out transition
            watermark.style.transition = 'opacity 1s ease-out';
            watermark.style.opacity = 0;
            
            // After the fade-out, set display to none
            setTimeout(function() {
                watermark.style.display = 'none';
            }, 600); // Wait 1 second after fading out
        }, 600); // Delay fade-out by 1 second
    }
};
