window.onload = function () {
    // event handler to prevent Ctrl + C
    document.addEventListener('keydown', function (event) {
        // Check if Ctrl key and 'C' key are pressed simultaneously
        if (event.ctrlKey && event.key === 'c') {
            // Prevent default action (copying)
            event.preventDefault();
            alert('❌ Ctrl + C key combination is prohibited!');
        }
    });
    // event handler to prevent right click
    document.addEventListener('contextmenu', function (event) {
        // Prevent the default context menu
        event.preventDefault();
        // Show custom alert box
        alert('❌ Right click is prohibited!');
    });

    // Disable text dragging
    document.addEventListener('dragstart', function (event) {
        // Prevent dragging of text
        alert('❌ Dragging is prohibited!');
        event.preventDefault();
    });
};

function openNav() {
    document.getElementById('mobileNav').style.width = "250px";
}
function closeNav() {
    document.getElementById('mobileNav').style.width = "0";
}


/* accessibility JS code start */
function toggleAccessibilityOptions() {

    var accessBtn = document.getElementById('accessibilityButton');

    var accessibilityOptions = document.getElementById('accessibility_option');
    if (accessibilityOptions.style.display === 'block') {
        accessibilityOptions.style.display = 'none';
        accessBtn.style.animationPlayState = 'running';
        accessBtn.innerHTML = "Accessibility";

    } else {
        accessibilityOptions.style.display = 'block';
        accessBtn.style.animationPlayState = 'paused';
        accessBtn.innerHTML = "Close";
    }
}

function increaseTextSize() {
    document.body.style.fontSize = 'larger';
}

function decreaseTextSize() {
    document.body.style.fontSize = 'smaller';
}

function getUsualTextSize() {
    document.body.style.fontSize = "medium";
}

function toggleHighContrastDark() {
    var divElements = document.getElementsByTagName('div');
    var h1Elements = document.getElementsByTagName('h1');
    var buttonElements = document.getElementsByTagName('button');

    for (var i = 0; i < divElements.length; i++) {
        divElements[i].classList.toggle('high-contrast-dark');
    }

    // Toggle class for h1 elements
    for (var j = 0; j < h1Elements.length; j++) {
        h1Elements[j].classList.toggle('high-contrast-dark');
    }

    // Toggle class for button elements
    for (var k = 0; k < buttonElements.length; k++) {
        buttonElements[k].classList.toggle('high-contrast-dark');
    }
}