const img= document.getElementById('img');



img.addEventListener('mouseenter',()=>{
     img.classList.add('poppedImg');
     
});
img.addEventListener(('mouseleave'),()=>{
     img.classList.remove('poppedImg');
});
