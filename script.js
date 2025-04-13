// Changing text content dynamically
function changeText() {
    const title = document.getElementById('main-title');
    title.textContent = "You've changed the title! 🎉";
}

// Modification of  CSS styles via JavaScript
function changeStyle() {
    const title = document.getElementById('main-title');
    title.style.color = "crimson";
    title.style.fontSize = "2.5rem";
    title.style.fontWeight = "bold";
}

// Adding an element when button is clicked
function addBox() {
    const container = document.getElementById('container');
    const newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.textContent = "I'm a new dynamic box!";
    container.appendChild(newBox);
}

// Removing the last box
function removeBox() {
    const container = document.getElementById('container');
    if (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}
