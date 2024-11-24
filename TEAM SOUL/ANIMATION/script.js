let countdown = 5;
const mainContent = document.getElementById('mainContent');
const mainHead = document.getElementById('mainHead');

const interval = setInterval(() => {
    countdown--;
    if (countdown <= 0) {
        clearInterval(interval);
        mainContent.style.display = 'flex';
        mainHead.style.display = 'none';
    }
}, 1000);