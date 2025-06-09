let gameSeq=[];
let userSeq=[];

let start=false;
let level=0;
btns=["red","yellow","purple","green"];


let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game started");
        start=true;
    }
    levelUp();

});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=(`level ${level}`);
    let ranIdx=Math.floor(Math.random()*4);
    let randCol=btns[ranIdx];
    let randBtn=document.querySelector(`.${randCol}`);
    
    gameSeq.push(randCol);
    console.log(gameSeq);

    btnFlash(randBtn);
};
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! Your score is ${level} <br> press enter to start!!   `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}
function btnPress(){
    let btn=this;
    btnFlash(btn);
    
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
   
    checkAns(userSeq.length-1);
}
let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress); 
    
}
function reset(){
    level=0;
    start=false;
    gameSeq=[];
    userSeq=[];
}  