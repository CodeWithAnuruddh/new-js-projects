document.addEventListener("DOMContentLoaded", () => {
    const timer = document.querySelector('#value');
    const buttonIncrease = document.querySelector('#increase'); 
    const buttonDecrease = document.querySelector('#decrease'); 
    const buttonReset = document.querySelector('#reset'); 
    let count = 0;
    
    buttonDecrease.addEventListener('click', function(e) {
        e.preventDefault();
        timer.textContent = valueDecrease();
        

    });

    buttonReset.addEventListener('click', function(e) {
        e.preventDefault();
        count = 0;
        timer.textContent = count;
        
        
    });

    buttonIncrease.addEventListener('click', function(e) {
        e.preventDefault();
        timer.textContent = ++count;
    });

    function valueDecrease() { 
       return( --count); 
    }
});
