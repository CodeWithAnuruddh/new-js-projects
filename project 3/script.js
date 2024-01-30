document.addEventListener('DOMContentLoaded', function() {
const randomColors = [
  "#FF5733", "#33FF57", "#5733FF", "#FF3357", "#33FFA5", "#3357FF", "#33A5FF", "#FFA533", "#A5FF33", "#A533FF",
  "#FF336C", "#33FF6C", "#336CFF", "#33FF33", "#6C33FF", "#6CFF33", "#FF3333", "#FF6C33", "#FF3361", "#6CFF6C",
  "#3361FF", "#3361FF", "#6C33FF", "#3361FF", "#6CFF6C", "#3361FF", "#3361FF", "#6C33FF", "#3361FF", "#6CFF6C",
  "#FF3361", "#6CFF6C", "#3361FF", "#3361FF", "#6C33FF", "#3361FF", "#6CFF6C", "#3361FF", "#3361FF", "#6C33FF",
  "#3361FF", "#6CFF6C", "#3361FF", "#3361FF", "#6C33FF", "#3361FF", "#6CFF6C", "#3361FF", "#3361FF", "#6C33FF",
  "#FF33A5", "#FF33FF", "#A5FF33", "#A533FF", "#FFA533", "#A5FF33", "#A533FF", "#FFA533", "#A5FF33", "#A533FF",
  "#FFA533", "#A5FF33", "#A533FF", "#FFA533", "#A5FF33", "#A533FF", "#FFA533", "#A5FF33", "#A533FF", "#FFA533",
  "#A5FF33", "#A533FF", "#FFA533", "#A5FF33", "#A533FF", "#FFA533", "#A5FF33", "#A533FF", "#FFA533", "#A5FF33",
  "#A533FF", "#FFA533", "#A5FF33", "#A533FF", "#FFA533", "#A5FF33", "#A533FF", "#FFA533", "#A5FF33", "#A533FF"
];
const button = document.querySelector('#btn')
const color = document.querySelector(".color")
button.addEventListener('click', function(e) {
  e.preventDefault();
  let hi = getRandomNumber()
  color.textContent = randomColors[hi];
  document.body.style.backgroundColor = randomColors[hi];
function getRandomNumber(){
   let genReandom = Math.floor(Math.random() * randomColors.length);
   return(genReandom)
}
});
});
