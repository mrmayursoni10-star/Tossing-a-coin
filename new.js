let mode=document.querySelector(".mode");
let Head=document.querySelector(".head");
let Tail=document.querySelector(".tail");
let image=document.querySelector(".image");

let curr_clr="light";
let user="None";

// dark_light mode
const handlerMode=()=>{
    if(curr_clr==="light"){
        curr_clr="dark";
        document.querySelector("body").style.background="black";
        mode.innerHTML="Dark";
        mode.style.opacity="0.5";
        
    }
    else{
        curr_clr="light";
        document.querySelector("body").style.background="darkblue";
        mode.innerHTML="Light";
        mode.style.opacity="1";
        
        
    }
    
};
mode.addEventListener("click",handlerMode);
// Toss
const handlerHead=()=>{
    user="Head";
    Head.style.border="8px solid darkblue";
    Tail.style.border="2px solid black";
    image.src="head.png";
   
};
const handlerTail=()=>{
    console.log("Clicked");
   user="Tail";
   Tail.style.border="8px solid darkblue";
   Head.style.border="2px solid black";
   image.src="tail.png";
};
Head.addEventListener("click",handlerHead);
Tail.addEventListener("click",handlerTail);

// calculation

let show=document.querySelector("p");
let ResultBtn=document.querySelector(".result");
const Computer_baba=()=>{
    const option=["Head","Tail"];
    const r=Math.floor(Math.random()*2);
    return option[r];

}
const Result=()=>{
    console.log("Clicked");
    const computer_result=Computer_baba()
    if(user==="None"){
        show.innerText="Please choose your choice!!";
        

    }
    else if(user===computer_result){
        show.innerText=`${user}!. You Won`;
    }
    else{
        show.innerText="Loose the task. Better Luck Next Time..";
    }
    
};
ResultBtn.addEventListener("click", Result);




