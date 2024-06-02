// Method 1
// ========================

// let increase = document.querySelector('.increase');
// let decrease = document.querySelector('.decrease');
// let reset = document.querySelector('.reset');
// let number = document.querySelector('#value');

// increase.addEventListener('click', function(){
//     let numberValue = parseInt(number.textContent);
//     number.textContent = numberValue + 1;
// });

// decrease.addEventListener('click', function(){
//     let numberValue = parseInt(number.textContent);
//     number.textContent = numberValue - 1;
// });

// reset.addEventListener('click', function(){
//     number.textContent = 0;
// });

// ===============================

// Method 2
// ===========================================

let value = 0;
let number = document.querySelector('#value');

let buttons = document.querySelectorAll('.btn');
let buttonsArray = ['increase', 'decrease', 'reset'];

console.log(buttonsArray);

buttonsArray.forEach(function(button){
    number.addEventListener('click', function(){
        
    });
});






