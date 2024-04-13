var currentPath = window.location.pathname;

// Extract the folder name from the path
var pathParts = currentPath.split('/');
var folderName = pathParts[pathParts.length - 2];

var parent_directory = "";
var index_directory = "";

if (folderName === stringToMatch) {
    parent_directory = "";
    index_directory = "../";
} else {
    parent_directory = "pages/";
    index_directory = "";
}

if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    let isListening = false;

    recognition.onresult = function(event) {
        const result = event.results[0][0].transcript.toLowerCase();
        console.log('Voice Input: ', result);

        if (isListening) {
            if (result.includes('home')) {
                window.location.href = 'index.html';
                isListening = false;
            } else if ((result.includes('register')) || (result.includes('registration'))) {
                window.location.href = parent_directory + 'registration.html';
                isListening = false;
            } else if (result.includes('about')) {
                window.location.href = parent_directory + 'about.html';
                isListening = false;
            } 
            else if (result.includes('contact')) {
                window.location.href = parent_directory + 'contact.html';
                isListening = false;
            } else if (result.includes('soil testing') || ((result.includes('organic') || result.includes('inorganic') && result.includes('fertilizers')) )) {
                window.location.href = parent_directory + 'redirect.html';
                isListening = false;
            } else {
                alert('Unrecognised Command! Try again.');
                isListening = false;
            }
        }
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error: ', event.error);
        isListening = false;
    };

    document.getElementById('voiceButton').addEventListener('click', function() {
        if (!isListening) {
            recognition.start();
            isListening = true;
        } else {
            recognition.stop();
            isListening = false;
        }
    });
} else {
    console.error('Speech recognition not supported in this browser.');
}