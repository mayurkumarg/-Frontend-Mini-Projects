function Hacking(){
    function DelayMsg_1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`<p class="command"> >> Intializing Hacking</p><p class="b1 b">.</p><p class="b2 b">.</p><p class="b3 b">.</p>`)
        },Math.random()*7000)
    }
    );
}

function DelayMsg_2(prev){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`<p class="command"> >> Reading your Files</p><p class="b1 b">.</p><p class="b2 b">.</p><p class="b3 b">.</p>`)
        },Math.random()*7000)
    }
    );
}

function DelayMsg_3(prev){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`<p class="command"> >> Password files Detected</p><p class="b1 b">.</p><p class="b2 b">.</p><p class="b3 b">.</p>`)
        },Math.random()*7000)
    }
    );
}

function DelayMsg_4(prev){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`<p class="command"> >> Sending all Password and personal files to server</p><p class="b1 b">.</p><p class="b2 b">.</p><p class="b3 b">.</p>`)
        },Math.random()*7000)
    }
    );
}

function DelayMsg_5(prev){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`<p class="command"> >> Cleaning up</p><p class="b1 b">.</p><p class="b2 b">.</p><p class="b3 b">.</p>`)
        },Math.random()*7000)
    }
    );
}

function DelayMsg_6(prev){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`<div class='icrct_pswd'>Incorrect Code !!</div>`)
        },Math.random()*7000)
    }
    );
}

function blinkingDots1(){
   return new Promise((resolve)=>{
    setTimeout(()=>{
        let first=document.querySelector(".b1");
        let value=(first.textContent===".")?"":".";
        resolve(value);
    },300)
   });
}

function blinkingDots2(prev){
   return new Promise((resolve)=>{
    setTimeout(()=>{
        let first=document.querySelector(".b2");
        let value=(first.textContent===".")?"":".";
        resolve(value);
    },300)
   });
}

function blinkingDots3(prev){
   return new Promise((resolve)=>{
    setTimeout(()=>{
        let first=document.querySelector(".b3");
        let value=(first.textContent===".")?"":".";
        resolve(value);
    },300)
   });
}


async function runningDots(){
    while(true)
    {
                                                                         
        let d1=await blinkingDots1();                                                    
    document.querySelectorAll(".b1").forEach(e=>{
        e.textContent=d1
    });
                                                              
    let d2=await blinkingDots2(d1);
    document.querySelectorAll(".b2").forEach(e=>{
        e.textContent=d2
    });
    
    let d3=await blinkingDots3(d2);
    document.querySelectorAll(".b3").forEach(e=>{
        e.textContent=d3
    });
    }
    
}

function popup(){
    let hack=document.createElement('div');
    hack.classList.add("hacked");
    let body=document.querySelector('body');
    body.insertAdjacentElement("beforeend",hack);
    document.getElementsByClassName("hacked")[0].textContent="IT is Hacked";
    // hack.setAttribute("style","border:1px solid black")
}

async function runTerminal() {
    
    let result1 = await DelayMsg_1();  // waits for the message
    document.getElementsByClassName("intial")[0].innerHTML = result1;

    // Start blinking only after first message is in
    runningDots();  

    let result2 = await DelayMsg_2(result1);
    document.getElementsByClassName("read")[0].innerHTML = result2;
    
    let result3 = await DelayMsg_3(result2);
    document.getElementsByClassName("detect")[0].innerHTML = result3;

    let result4 = await DelayMsg_4(result3);
    document.getElementsByClassName("send")[0].innerHTML = result4;

    let result5 = await DelayMsg_5(result4);
    document.getElementsByClassName("clean")[0].innerHTML = result5;

    let result6 = await DelayMsg_6(result5);
    let con=document.querySelector(".container");
    con.innerHTML="<div class='icrct_pswd'>System Hacked !!</div>";
    // popup();    <<<<< POPUP alert after hacking 
    }

    runTerminal();
}

function HackingModeActivate(){
    let a1=prompt("Do you want to Hack ?  (yes/no) ");
if(a1.toLowerCase()==="yes")
{
    let code=prompt("Enter the code: 'HACK' ");
    if(code.toLowerCase()==="hack")
    {
        Hacking();
    }
    else{
        let con=document.querySelector(".container");
        
        con.innerHTML="<div class='icrct_pswd'>Incorrect Code !!</div>";
    }
}
else{
    let con=document.querySelector(".container");
        
        con.innerHTML="<div class='icrct_pswd'>Hacking Mode closed !!!</div>";
}
}

HackingModeActivate();