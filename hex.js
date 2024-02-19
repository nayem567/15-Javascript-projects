const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.querySelector('.btn');
const color = document.querySelector('.color');

button.addEventListener('click', function () {
    randomHex = generateRandomHex();
    color.textContent = randomHex;
    document.body.style.backgroundColor = randomHex;
});

function generateRandomHex() {
    var hexValue = "#"
    for (var i = 0; i < 6; i++) {
        hexValue += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexValue;

}




