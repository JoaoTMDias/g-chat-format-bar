import './contentscript.scss';

const isThisContentscript = true;
console.log('isThisContentscript', isThisContentscript);

document.addEventListener("DOMContentLoaded", () => {
    const messageContainer = document.querySelector("[role='main']");

    const allBoxes = Array.from(messageContainer?.querySelectorAll("[role='textbox']"));

    if (allBoxes) {
        const lastChild = allBoxes[allBoxes.length - 1];
        const node = document.createElement("div");                 // Create a <li> node
        const textnode = document.createTextNode("test");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        lastChild.appendChild(node)
    }
});
