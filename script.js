function loadImg(input, imgId, boxId){
  if(input.files && input.files[0]){
    const reader = new FileReader();
    reader.onload = e=>{
      document.getElementById(imgId).src = e.target.result;
      document.getElementById(boxId).classList.add('has');
    };
    reader.readAsDataURL(input.files[0]);
  }
}
function makeConfetti(){
  const colors=['#c9a87a','#ff6b8a','#2b1d12'];
  for(let i=0;i<70;i++){
    const el=document.createElement('div');
    el.className='confetti';
    el.style.left=Math.random()*100+'vw';
    el.style.top='-10px';
    el.style.background=colors[Math.floor(Math.random()*colors.length)];
    el.style.animationDuration=(2+Math.random()*2)+'s';
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),3000);
  }
}
// قلوب بتطير طول الوقت
function startHearts(){
  const hearts=['❤️','💖','💕','🫶🏻','✨','🌸'];
  setInterval(()=>{
    const el=document.createElement('div');
    el.className='floating-heart';
    el.textContent=hearts[Math.floor(Math.random()*hearts.length)];
    el.style.left=Math.random()*100+'vw';
    el.style.fontSize=(14+Math.random()*16)+'px';
    el.style.setProperty('--x',(Math.random()*200-100)+'px');
    el.style.animationDuration=(5+Math.random()*5)+'s';
    document.getElementById('hearts-bg').appendChild(el);
    setTimeout(()=>el.remove(),10000);
  },350);
}
document.addEventListener('DOMContentLoaded', startHearts);

// لما يدوس على الصورة يطلع أشكال
function showShapes(box){
  const r=box.getBoundingClientRect();
  const x=r.left+r.width/2, y=r.top+r.height/2;
  const shapes=['❤️','💖','🫶🏻','✨','🌹'];
  for(let i=0;i<20;i++){
    const el=document.createElement('div');
    el.textContent=shapes[Math.floor(Math.random()*shapes.length)];
    el.style.position='fixed'; el.style.left=x+'px'; el.style.top=y+'px';
    el.style.fontSize='20px'; el.style.zIndex='9999';
    el.style.transition='1s ease-out';
    document.body.appendChild(el);
    setTimeout(()=>{
      el.style.transform=`translate(${(Math.random()-0.5)*200}px, ${-100-Math.random()*100}px) scale(0)`;
      el.style.opacity='0';
    },20);
    setTimeout(()=>el.remove(),1100);
  }
}
