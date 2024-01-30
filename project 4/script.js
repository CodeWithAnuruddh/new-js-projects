document.addEventListener("DOMContentLoaded", () => {
    const timer = document.querySelector('#value');
    const buttonIncrease = document.querySelector('#increase'); 
    const buttonDecrease = document.querySelector('#decrease'); 
    const buttonReset = document.querySelector('#reset'); 
    let count = 0;
    
    buttonDecrease.addEventListener('click', function(e) {
        e.preventDefault();
        timer.textContent = valueDecrease();
        color();
       
        
    });

    buttonReset.addEventListener('click', function(e) {
        e.preventDefault();
        count = 0;
        timer.textContent = count;
        color();
        
        
    });

    buttonIncrease.addEventListener('click', function(e) {
        e.preventDefault();
        timer.textContent = ++count;
        color();
       
        
    });

    function valueDecrease() { 
       return( --count); 
    }
    function color(){
        if(count>0){
            timer.style.color = 'red';
        }
        else if(count<0){
            timer.style.color = 'aqua';
        }
        else{
            timer.style.color = '#102A42'
        }
    }
});
  
