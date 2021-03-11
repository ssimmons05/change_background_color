let colors = ["red", "orange", "green", "blue", "purple", "cyan", "gray", "brown", "salmon"];

function changeColor() {
    for (let i = 0; i < colors.length; i++) {
        let randomColor = colors[Math.floor(colors.length*Math.random())];
        document.body.style.backgroundColor = randomColor;  
    }
};