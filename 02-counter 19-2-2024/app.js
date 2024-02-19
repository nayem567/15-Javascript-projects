// =======================================================

let number = document.querySelector('#value');
const increase_button = document.querySelector('.increase');
const reset_button = document.querySelector('.reset');
const decrease_button = document.querySelector('.decrease');

increase_button.addEventListener('click', function(){
    number.textContent = +number.textContent + 1;
    updateColor();
});

decrease_button.addEventListener('click', function(){
    number.textContent = +number.textContent - 1;
    updateColor();
});

reset_button.addEventListener('click', function(){
    number.textContent = 0;
    updateColor();
});

function updateColor(){
    let numberValue = parseInt(number.textContent);
    if(numberValue > 0){
        number.style.color = 'green';
    }else if(numberValue < 0){
        number.style.color = 'red';
    }else{
        number.style.color = '#102a42';
    }
}