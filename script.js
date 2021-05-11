const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const navItems = [nav1, nav2, nav3, nav4];

// Control Navigation Animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Toggle: Menu Active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animate In - Overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // Animate In - Nav Items
    navAnimation('out', 'in');
  } else {
    // Animate Out - Overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // Animate Out - Nav Items
    navAnimation('in', 'out');
  }
}

function help() {
  var x = document.getElementById("box2");
  x.data = "https://www.enneagraminstitute.com/how-the-enneagram-system-works";
}

function showType(num) {
  var x = document.getElementById("box");
  x.data = `https://www.enneagraminstitute.com/type-${num}`;
  x.style.display = "none";
  if (x.style.display === "none" || x.style.display === "list-item") {
    x.style.display = "list-item";
  }
}

function showPerson(num) {
  var x = document.getElementsByClassName("img");
  var y = document.getElementsByClassName(num);
  for(var i=0; i<x.length; i++) {
    if(x[i].style.opacity==="1") { 
      x[i].style.opacity="0.3" ;
    }
  }
  for(var i=0; i<y.length; i++) {
    y[i].style.opacity = "1";
  }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});

function onLoad() {
  help();
  showType(1);
}

function testingCenter(){
  window.open("https://tests.enneagraminstitute.com", "_blank");
}
onLoad();