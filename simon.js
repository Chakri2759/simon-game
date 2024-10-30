let btns=["violet","brown","pink","yellow"];
let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let score=0;
let highscore=0;
let h3=document.querySelector("h3");
let h2=document.querySelector("h2");

document.addEventListener("keydown",function(){
         if(started==false)
        {
            console.log("game started");
            
           
            levelup();
        }
});

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
};

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
};

function levelup(){
    userseq=[];
    level++;
    h3.append(score);
    h3.innerText=`level ${level}`;
    score.innerText=`your score:${level*100}`;
    let randinx=Math.floor(Math.random()*3);
    let randcol=btns[randinx];
    let randbtn=document.querySelector(`.${randcol}`);
    gameseq.push(randcol);
    console.log("game seq",gameseq);
    gameflash(randbtn);
     
};

function btnpress(){
   let btn=this;
   userflash(btn);
   let usercol=btn.getAttribute("id");
   userseq.push(usercol);
   console.log( "userseq",userseq);
   check(userseq.length-1);

}

function check(idx){
   
         if(userseq[idx]===gameseq[idx])
        {
            if(userseq.length===gameseq.length)
             {
                setTimeout(levelup,1000);
             }
        }
        else
        {  
            let score=level;
            let hs=highsc(score);
            h3.innerHTML=`Game over ! your score: <b> ${level}<b><br>highscore:${hs}<br> press any key to start`;
             document.querySelector("body").style.backgroundColor="red";
             setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white"},200);
            gamereset();
        }
}
 function gamereset()
 {
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
 }
 function highsc(score){
    if(score>highscore)
     highscore=score;

    return highscore;
 }

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}
