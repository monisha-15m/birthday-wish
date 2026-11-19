const memories = [
  "A random conversation that somehow becomes our favourite memory. ♡",
  "Laughing until we forget what we were even laughing about. 🫶",
  "The comfort of knowing I can always be myself with you. 🌷",
  "All the little moments that don't look big—but mean everything to me. 💗",
  "Here's to every old memory and all the new ones waiting for us. ✨"
];
const memoryReveal=document.getElementById('memoryReveal');
document.getElementById('memoryBtn').addEventListener('click',()=>{
  memoryReveal.textContent=memories[Math.floor(Math.random()*memories.length)];
});
const letterBtn=document.getElementById('letterBtn');
letterBtn.addEventListener('click',()=>document.getElementById('letter').scrollIntoView({behavior:'smooth'}));

const dialog=document.getElementById('quizDialog');
document.getElementById('quizBtn').addEventListener('click',()=>dialog.showModal());
document.getElementById('closeQuiz').addEventListener('click',()=>dialog.close());
document.querySelectorAll('.quiz-options button').forEach(button=>{
  button.addEventListener('click',()=>{
    document.getElementById('quizResult').textContent=button.dataset.answer==='right'
      ? 'Correct! That is our friendship recipe. I love you, uyirey! 💗'
      : 'Cute guess! But the real answer is love, laughs and showing up for each other. ♡';
  });
});
document.getElementById('magicBtn').addEventListener('click',()=>{
  document.getElementById('magicMessage').textContent='Your wish is on its way, Ruby. May life give you the softest days, happiest surprises and endless love. Happy birthday, uyirey! ♡';
  for(let i=0;i<24;i++)makeHeart();
});
function makeHeart(){
  const heart=document.createElement('span');heart.className='float-heart';
  heart.textContent=['♡','♥','✧','❀'][Math.floor(Math.random()*4)];
  heart.style.left=Math.random()*100+'%';heart.style.fontSize=(12+Math.random()*20)+'px';
  heart.style.animationDuration=(3+Math.random()*4)+'s';
  document.querySelector('.floating-hearts').appendChild(heart);
  setTimeout(()=>heart.remove(),7000);
}
setInterval(makeHeart,1300);

// Birthday countdown (local browser time)
function updateCountdown(){
  const target=new Date('2026-12-16T00:00:00');
  const now=new Date();
  const diff=target-now;
  const el=document.getElementById('countdown');
  if(!el)return;
  if(diff<=0){el.textContent='It is your birthday! Happy birthday, uyirey! ♡';return;}
  const days=Math.floor(diff/86400000);
  const hours=Math.floor((diff%86400000)/3600000);
  const mins=Math.floor((diff%3600000)/60000);
  const secs=Math.floor((diff%60000)/1000);
  el.textContent=`${days} days · ${hours} hrs · ${mins} mins · ${secs} secs until your birthday ♡`;
}
updateCountdown();setInterval(updateCountdown,1000);
