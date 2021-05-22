import { isValidColor } from './colors.js';
function logWords(results) {
    // console.log(results[results.length - 1][0].transcript);
}

export function handleResult ({ results }) {
    logWords(results);
    const words = results[results.length - 1][0].transcript;

    // lowercase everything
    let color = words.toLowerCase();

    // strip any spaces out
    color = color.replace(/\s/g, "");

    // check if it's a valid color
    if(!isValidColor(color)) return;

    // than show the UI for it
    const colorClass = document.querySelector(`.${color}`);
    colorClass.classList.add('got');

    // change the background color
    document.body.style.backgroundColor = color;

    console.log('This is a valid color!');
    console.log(color);
    console.log(colorClass);
}