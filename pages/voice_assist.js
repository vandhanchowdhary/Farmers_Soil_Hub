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
                window.location.href = '../index.html';
                isListening = false;
            } else if (result.includes('register')) {
                window.location.href = 'registration.html';
                isListening = false;
            } else if (result.includes('about')) {
                window.location.href = 'about.html';
                isListening = false;
            } 
            else if (result.includes('contact')) {
                window.location.href = 'contact.html';
                isListening = false;
            } else if (result.includes('soil testing') || ((result.includes('organic') || result.includes('inorganic') && result.includes('fertilizers')) )) {
                window.location.href = 'redirect.html';
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