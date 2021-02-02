
corona1 = document.getElementById('corona');
menu1= document.getElementById('menu1');
menu2 = document.getElementById('menu2');
navs = document.getElementsByClassName('nav');
arrow = document.getElementById('arrow');
click = document.getElementById('click');
graph = document.getElementById('graph');
uk = document.getElementById('uk');
news = document.getElementById('news');

window.onload = function() {
  titleInit(menu1)
  title2Init(menu2)
  imageInit(corona1)
  arrowInit()
};


function growPlusNav(element) {
  element.style.width = "450px";
  element.style.height = "450px";
  arrow.style.display = "none"
  click.style.display = "none"


  navs = document.getElementsByClassName('nav')
  for(i=0;i<navs.length;i++) {
    navs[i].style.display = "block";
  }
}

function shrinkMinusNav(element) {
  element.style.width = "300px";
  element.style.height = "300px";
  arrow.style.display = "block"
  click.style.display = "block"

  navs = document.getElementsByClassName('nav')
  for(i=0;i<navs.length;i++) {
    navs[i].style.display = "none";
  }
}

function imageInit(element) {
element.style.marginTop = "0px";
}


function titleInit(element) {
  element.style.marginRight = "0px";
  }

  function title2Init(element) {
    element.style.marginLeft= "0px";
    }

function arrowInit() {
  setInterval(function() {arrow.style.height = "25px"}, 300);
  setInterval(function() {arrow.style.height = "20px"}, 600);

}

function navPulse(element, init, final) {
 element.addEventListener('mouseover', function() { var int1 =setInterval(function() {element.style.height = final}, 200)
 var int2 = setInterval(function() {element.style.height = init}, 400) 

 element.addEventListener('mouseout', function() { 
   clearInterval(int1);
   clearInterval(int2);
 })

});
}


navPulse(graph, "50px", "55px")
navPulse(uk, "40px", "45px");
navPulse(news, "50px", "55px")




document.addEventListener('click', function(event) {
  let withinBoundaries = event.composedPath().includes(corona1);
  let withinBoundaries2 = event.composedPath().includes(graph);
  let withinBoundaries3 = event.composedPath().includes(uk);
  let withinBoundaries4 = event.composedPath().includes(news);

  
  
  if(withinBoundaries || withinBoundaries2 || withinBoundaries3 || withinBoundaries4 ) {
  growPlusNav(corona1)
  }else {
    shrinkMinusNav(corona1)
  } 
 });



graphTab = document.getElementById('graphTab');
syringeTab = document.getElementById('syringeTab');
newsTab = document.getElementById('newsTab');
invisDiv1 = document.getElementById('invisDiv1');


 graph.addEventListener('click', function() {

   graphTab.style.transform = "translatey(-100%)";
   invisDiv1.style.display= 'block';

   invisDiv1.addEventListener('click',function() {
   invisDiv1.style.display= 'none';
   graphTab.style.transform = "translatey(100%)";


   })

    
     
});



 uk.addEventListener('click', function() {

  syringeTab.style.transform = "translatex(100%)";
   invisDiv2.style.display= 'block';

   invisDiv2.addEventListener('click',function() {
   invisDiv2.style.display= 'none';
   syringeTab.style.transform = "translatex(-100%)";


   })
   
})



news.addEventListener('click', function() {

   newsTab.style.transform = "translatex(-100%)";
   invisDiv3.style.display= 'block';

   invisDiv3.addEventListener('click',function() {
   invisDiv3.style.display= 'none';
   newsTab.style.transform = "translatex(100%)";


   })
   
})



   


 
  
