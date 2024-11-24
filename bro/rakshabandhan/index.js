let countdown = 5; // Set the initial countdown value
const timerElement = document.getElementById('timer');
const mainContent = document.getElementById('main-content');

const interval = setInterval(() => {
    countdown--; // Decrement countdown
    timerElement.textContent = countdown; // Update timer display
    if (countdown <= 0) {
        clearInterval(interval); // Stop the timer
        timerElement.style.display = 'none'; // Hide the timer
        mainContent.style.display = 'block'; // Show the main content
    }
}, 1000); // Update every second