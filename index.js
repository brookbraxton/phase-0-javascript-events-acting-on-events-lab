function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left);
    
    // Get the width of the game field
    const gameFieldWidth = 400; // Assuming your game field is 400px wide
    const dodgerWidth = 40; // Width of the dodger
    
    // Check if the dodger can move right
    if (left < gameFieldWidth - dodgerWidth) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft(); // Assuming you already have this function implemented
    } else if (event.key === 'ArrowRight') {
        moveDodgerRight();
    }
});

function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left);

    // Check if the dodger can move left
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
        moveDodgerRight();
    }
});
