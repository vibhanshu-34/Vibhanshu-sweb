var togglebtn = document.getElementById('togglex');
const sidebar = document.getElementById('toggleoptn');
const tlogo = document.getElementById('togglelogos');
const options = document.getElementById('options');
const mainbox = document.getElementById('mainbox');



//.       main buttons.   👇👇
const lbox1 = document.getElementById('lbox1');
const lbox2 = document.getElementById('lbox2');
const lbox3 = document.getElementById('lbox3');
const lbox4 = document.getElementById('lbox4');
const lbox5 = document.getElementById('lbox5');
//.        main buttons. 👆👆



//.        main linkbox.   👇👇👇

const mlink1 = document.getElementById('mlink1');

const mlink2 = document.getElementById('mlink2');

const mlink3 = document.getElementById('mlink3');

const mlink4 = document.getElementById('mlink4');

const mlink5 = document.getElementById('mlink5');

//.        main linkbox.    👆👆👆




togglebtn.addEventListener("click",function () {
  
  if (togglebtn.className === "offtoggle") 
  {
    togglebtn.className = "ontoggle";
    
    options.style.display = '';
    mainbox.style.display = ''
    
  
  } 
  else 
  {
    togglebtn.className = "offtoggle";
    options.style.display = '';
    mainbox.style.display = '';
    ;
  }
  sidebar.classList.toggle('show_toggleoptn');
  tlogo.classList.toggle('togglelogos_show');
  options.classList.toggle('show_option')
  mainbox.classList.toggle('show_mainbox')
  
  
 
   
 });
 
 
 //.        main button functions 👇👇👇

lbox1.addEventListener("click",function () {
  
  mlink1.classList.toggle('show_mlink1');
  
});


lbox2.addEventListener("click",function () {
  
  mlink2.classList.toggle('show_mlink2');
  
});


lbox3.addEventListener("click",function () {
  
  mlink3.classList.toggle('show_mlink3');
  
});



lbox4.addEventListener("click",function () {
  
  mlink4.classList.toggle('show_mlink4');
  
});


lbox5.addEventListener("click",function () {
  
  mlink5.classList.toggle('show_mlink5');
  
});

//.        main button function 👆👆👆