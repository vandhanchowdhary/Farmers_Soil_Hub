function openNav() {
    document.getElementById('mobileNav').style.width = "250px";
}
function closeNav() {
    document.getElementById('mobileNav').style.width = "0";
}    

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
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
