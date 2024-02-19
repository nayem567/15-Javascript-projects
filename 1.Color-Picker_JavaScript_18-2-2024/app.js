const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.querySelector('.btn');
const color = document.querySelector('.color');

button.addEventListener('click', function(){
    const randomIndex = randomNumber();
    document.body.style.backgroundColor = colors[randomIndex] ;
    color.textContent = colors[randomIndex];

});

function randomNumber(){
    return Math.floor( Math.random() * colors.length) ;
}

