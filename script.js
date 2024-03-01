var togglebtn = document.getElementById('togglex');
const sidebar = document.getElementById('toggleoptn');
const tlogo = document.getElementById('togglelogos');
const options = document.getElementById('options');
const mainbox = document.getElementById('mainbox');
const footer = document.getElementById('footer');
const homebtn = document.getElementById('home');



//.       main buttons.   👇👇
const lbox1 = document.getElementById('lbox1');
const lbox2 = document.getElementById('lbox2');
const lbox3 = document.getElementById('lbox3');
const lbox4 = document.getElementById('lbox4');
const lbox5 = document.getElementById('lbox5');

const guide = document.getElementById('guide');
//.        main buttons. 👆👆



//.        main linkbox.   👇👇👇

const mlink1 = document.getElementById('mlink1');

const mlink2 = document.getElementById('mlink2');

const mlink3 = document.getElementById('mlink3');

const mlink4 = document.getElementById('mlink4');

const mlink5 = document.getElementById('mlink5');

//.        main linkbox.    👆👆👆




//.         info box.     👇👇

const g1 = document.getElementById('g1');
const g2 = document.getElementById('g2');
const g3 = document.getElementById('g3');
const g4 = document.getElementById('g4');
const g5 = document.getElementById('g5');

//.         info box.     👆👆


//.        landing page.        👇👇



//.        landing page.        👆👆


togglebtn.addEventListener("click",function () {
  
  if (togglebtn.className === "offtoggle") 
  {
    togglebtn.className = "ontoggle";
  
  } 
  else 
  {
    togglebtn.className = "offtoggle";
    ;
  }
  sidebar.classList.toggle('show_toggleoptn');
  tlogo.classList.toggle('togglelogos_show');
  options.classList.toggle('show_option')
  mainbox.classList.toggle('show_mainbox')
  guide.classList.toggle('hide_guide');
  footer.classList.toggle('show_footer')
  

  

});



homebtn.addEventListener("click",function () {
  
  
  sidebar.classList.toggle('show_toggleoptn');
  tlogo.classList.toggle('togglelogos_show');
  options.classList.toggle('show_option')
  mainbox.classList.toggle('show_mainbox')
  guide.classList.toggle('hide_guide');
  footer.classList.toggle('show_footer')
  togglebtn.className = "offtoggle";
  
  
    ;
 
  
 
});
 
 
 
 
 //.        main button functions 👇

lbox1.addEventListener("click",function () {
  
  mlink1.classList.toggle('show_mlink1');
  g1.classList.toggle('hide_g1');

  
});


lbox2.addEventListener("click",function () {
  
  
  mlink2.classList.toggle('show_mlink2');
  g2.classList.toggle('hide_g2');
  
  
});


lbox3.addEventListener("click",function () {
  

  mlink3.classList.toggle('show_mlink3');
  g3.classList.toggle('hide_g3');

  
});



lbox4.addEventListener("click",function () {
  
  
  mlink4.classList.toggle('show_mlink4');
  g4.classList.toggle('hide_g4');
  
});


lbox5.addEventListener("click",function () {
  
  
  mlink5.classList.toggle('show_mlink5');
  g5.classList.toggle('hide_g5');
  
});

//.        main button function 👆👆👆