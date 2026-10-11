// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e,i) => { if(e.isIntersecting) setTimeout(()=>e.target.classList.add('visible'),i*80); });
},{threshold:0.08});
reveals.forEach(el=>obs.observe(el));

// Nav active
const secs = document.querySelectorAll('section');
const nls = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let cur='';
  secs.forEach(s=>{if(window.scrollY>=s.offsetTop-100)cur=s.id});
  nls.forEach(a=>{
    const active = a.getAttribute('href')==='#'+cur;
    a.style.background = active ? 'var(--gold)' : '';
    a.style.color = active ? 'var(--white)' : '';
    a.style.borderColor = active ? 'var(--gold)' : '';
  });
});