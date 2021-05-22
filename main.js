import { handleResult } from './handlers.js';
import { colorsByLength, isDark} from './colors.js';


const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
    return colors
        .map(color => `<div class="color ${color} ${isDark(color) ? 'dark' : ''}" style="background: ${color}">${color}</div>`).join('');
}

window.SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

function start() {
    // see if the browser supports it
    if(!('SpeechRecognition' in window)) {
        console.log('Sorry - your browser doesn\'t support speech recognition.');
        return;
    }
    console.log('Starting speech recognition...')

    // make a new speech recognition
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    // different event listener for SpeechRecognition
    // deprecated since may 2021
    recognition.onresult = handleResult;
    recognition.start();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);