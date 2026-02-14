function goToPage2(){
    switchPage("page1","page2");
}

function goToPage3(){
    switchPage("page2","page3");
    playSound();
    startExplosion();
}

function switchPage(from,to){
    document.getElementById(from).classList.remove("active");
    document.getElementById(to).classList.add("active");
}

/* ปุ่ม No กระโดด 5 ครั้ง */
let noCount = 0;

function jumpNo(){
    let btn = document.getElementById("noBtn");

    if(noCount < 5){
        btn.style.position = "absolute";
btn.style.left = Math.random()*70 + "px";
btn.style.top = Math.random()*70 + "px";
        noCount++;
    } else {
        btn.style.display="none";
    }
}

/* เสียง */
function playSound(){
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type="triangle";
    osc.frequency.value=880;
    gain.gain.value=0.25;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime+0.3);
}

/* เอฟเฟกต์อลัง */
function startExplosion(){
    setInterval(()=>{
        let s=document.createElement("div");
        s.className="sparkle";
        let icons=["💖","✨","🌸","💗","💞"];
        s.innerHTML=icons[Math.floor(Math.random()*icons.length)];
        s.style.left=Math.random()*100+"vw";
        document.body.appendChild(s);
        setTimeout(()=>{s.remove();},4000);
    },200);
                }
