const frame = document.querySelector("#container");
const row = Array({length: 16});

function frameIt() {
    frame.style.gridTemplateColumns = 'repeat(${16}, 1fr)'
    frame.style.gridTemplateColumns = 'repeat(${16}, 1fr)'

    for (let i = 0; i < 256; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('mouseover', fillIn);
        dot.addEventListener('mousedown', fillIn);
        frame.appendChild(dot);
    }
}

window.onload = () => {
    frameIt()
}