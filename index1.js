let container1=document.getElementById("container1");
let card1=document.getElementById("card1");
let button1=document.getElementById("button1")
is_red=true;
function btn1(){
    if(is_red==true){
  card1.textContent="card1 clicked";
  card1.style.color="red";
  card1.style.backgroundColor="black";  
  container1.style.backgroundColor="black";
  is_red=false;}
  else{
card1.style.color="black";
  card1.style.backgroundColor="white";  
  container1.style.backgroundColor="white";
  is_red=true;
  }

}

let container2=document.getElementById("container2");
let card2=document.getElementById("card2");
let button2=document.getElementById("button2")
is_green=true;
function btn2(){
    if(is_green==true){
  card2.textContent="card2 clicked";
  card2.style.color="green";
  card1.style.backgroundColor="black";  
  container2.style.backgroundColor="black";
  is_green=false;
    }
    else{
      card2.style.color="black";
  card2.style.backgroundColor="white";  
  container2.style.backgroundColor="white";
  is_green=true;  
    }
}

let container3=document.getElementById("container3");
let card3=document.getElementById("card3");
let button3=document.getElementById("button3")
is_yellow=true;
function btn3(){
    if(is_yellow==true){
  card3.textContent="card3 clicked";
  card3.style.color="gold";
  card3.style.backgroundColor="black";  
  container3.style.backgroundColor="black";
  is_yellow=false;
}
else{
    card3.style.color="black";
  card3.style.backgroundColor="white";  
  container3.style.backgroundColor="white";
  is_yellow=true;
}
}