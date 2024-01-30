const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const button = document.querySelector('#btn')
const  color= document.querySelector('.color')

button.addEventListener('click',function(e){
    e.preventDefault();
    let event1 = "#"
    
    for(let i =0 ;i<6; i++){
        let random1 = randomNumber()
        event1 += hex[random1];
        
    }
    color.innerHTML = event1;
    document.body.style.backgroundColor = event1;
    

});
function randomNumber(){
    let random = Math.floor(Math.random()* hex.length)
    return(random)
}