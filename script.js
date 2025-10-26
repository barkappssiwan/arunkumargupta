// script.js
document.addEventListener('DOMContentLoaded', () => {
    const voteButton = document.getElementById('vote-button');
    const voteCount = document.getElementById('vote-count');

    // Simple voting system using localStorage (per browser, not shared)
    let votes = localStorage.getItem('votes') ? parseInt(localStorage.getItem('votes')) : 0;
    voteCount.textContent = `Total Votes: ${votes}`;

    voteButton.addEventListener('click', () => {
        votes++;
        localStorage.setItem('votes', votes);
        voteCount.textContent = `Total Votes: ${votes}`;
    });
});
