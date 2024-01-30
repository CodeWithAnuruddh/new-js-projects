# Color Flipper

## By Two Methods First by sImple🙂 and Second by hex value😇

## index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Color Flipper || Simple</title>

    <!-- styles -->
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <nav>
      <div class="nav-center">
        <h4>color flipper</h4>
        <ul class="nav-links">
          <li><a href="index.html">simple</a></li>
          <li><a href="hex.html">hex</a></li>
        </ul>
      </div>
    </nav>
    <main>
      <div class="container">
        <h2>background color : <span class="color">#f1f5f8</span></h2>
        <button class="btn btn-hero" id="btn">click me</button>
      </div>
    </main>
    <!-- javascript -->
    <script src="script.js"></script>
  </body>
</html>

```

## hex.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Color Flipper || hex</title>

    <!-- styles -->
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <nav>
      <div class="nav-center">
        <h4>color flipper</h4>
        <ul class="nav-links">
          <li><a href="index.html">simple</a></li>
          <li><a href="hex.html">hex</a></li>
        </ul>
      </div>
    </nav>
    <main>
      <div class="container">
        <h2>background color : <span class="color">#f1f5f8</span></h2>
        <button class="btn btn-hero" id="btn">click me</button>
      </div>
    </main>
    <!-- javascript -->
    <script src="hex.js"></script>
  </body>
</html>

```

## style.css
```css
/*
=============== 
Fonts
===============
*/
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto:400,700&display=swap");

/*
=============== 
Variables
===============
*/

:root {
  /* dark shades of primary color*/
  --clr-primary-1: hsl(205, 86%, 17%);
  --clr-primary-2: hsl(205, 77%, 27%);
  --clr-primary-3: hsl(205, 72%, 37%);
  --clr-primary-4: hsl(205, 63%, 48%);
  /* primary/main color */
  --clr-primary-5: hsl(205, 78%, 60%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(205, 89%, 70%);
  --clr-primary-7: hsl(205, 90%, 76%);
  --clr-primary-8: hsl(205, 86%, 81%);
  --clr-primary-9: hsl(205, 90%, 88%);
  --clr-primary-10: hsl(205, 100%, 96%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--ff-secondary);
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: var(--ff-primary);
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

/* section */
.section {
  padding: 5rem 0;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}
main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

/*
=============== 
Nav
===============
*/
nav {
  background: var(--clr-white);
  height: 3rem;
  display: grid;
  align-items: center;
  box-shadow: var(--dark-shadow);
}
.nav-center {
  width: 90vw;
  max-width: var(--fixed-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-center h4 {
  margin-bottom: 0;
  color: var(--clr-primary-5);
}
.nav-links {
  display: flex;
}
nav a {
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1rem;
  color: var(--clr-primary-1);
  letter-spacing: var(--spacing);
  margin-right: 1rem;
}
nav a:hover {
  color: var(--clr-primary-5);
}
/*
=============== 
Container
===============
*/
main {
  min-height: calc(100vh - 3rem);
  display: grid;
  place-items: center;
}
.container {
  text-align: center;
}
.container h2 {
  background: var(--clr-black);
  color: var(--clr-white);
  padding: 1rem;
  border-radius: var(--radius);
  margin-bottom: 2.5rem;
}
.color {
  color: var(--clr-primary-5);
}
.btn-hero {
  font-family: var(--ff-primary);
  text-transform: uppercase;
  background: transparent;
  color: var(--clr-black);
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 700;
  transition: var(--transition);
  border: 2px solid var(--clr-black);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
}
.btn-hero:hover {
  color: var(--clr-white);
  background: var(--clr-black);
}

```


## script.js
```javascript
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


```


## hex.js

```javascript
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

```
