const btn = document.querySelector('#btnMudaLayout')
const mural = document.querySelector('.mural')
 
function mudaTexto(){
   if(btn.textContent == 'Blocos'){
      btn.textContent = 'Linhas'
      
     }else {
        btn.textContent = 'Blocos'
        
     }
  }
  function mudaLayout(){
   mural.classList.toggle('mural--linha')
 }
//   btn.onclick = mudaTexto
  
  
  

 btn.addEventListener('click', mudaTexto);
 btn.addEventListener('click', mudaLayout);
btn.classList.remove('no-js');

