document.addEventListener('DOMContentLoaded', () => {
    const voteButton = document.getElementById('vote-button');
    const voteCount = document.getElementById('vote-count');

    // Fetch current vote count
    async function loadVotes() {
        try {
            const response = await fetch('/api/vote');
            const data = await response.json();
            voteCount.textContent = `Total Votes: ${data.votes}`;
        } catch (error) {
            voteCount.textContent = 'Error loading votes. Using demo mode.';
            console.error('Vote fetch error:', error);
        }
    }

    // Increment vote
    async function incrementVote() {
        try {
            await fetch('/api/vote', { method: 'POST' });
            loadVotes(); // Reload to update display
        } catch (error) {
            console.error('Vote error:', error);
        }
    }

    loadVotes(); // Initial load
    voteButton.addEventListener('click', incrementVote);
});
