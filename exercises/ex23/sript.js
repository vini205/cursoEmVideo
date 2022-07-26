let block =document.getElementById('newValue');//Block pop-Out
let table = document.getElementById('myTable');
let dt = document.getElementsByTagName('td');
let input =document.getElementById('inp1')
function array(){
  let data =window.prompt('Escreva os dados da tabela')
  let tdData =Array(data.split(','))
  for (let i = 0; i < dt.length; i++) {
    dt[i].innerHTML = tdData[0][i];
  }
  number()
}
function number() {
  for (const el of dt) {
    const toNumber = Number(el.innerHTML);
    if (toNumber==el.innerHTML && el.innerHTML!=''){
      console.log(el.innerHTML)
      el.classList.add('number')
    } else{
      continue;
    }
  }
}
var tdNu;//Para guardar o elemento da tabela que foi clicado
for (const el of dt) {
  el.addEventListener('dblclick',function(a) {
  block.style.display='flex'
  input.focus();
  tdNu = a.target;//mostra qual elemento foi clicado
  })
}

input.addEventListener('keypress',function (key) {//Se o usuário der enter
  if(key.charCode==13){
    change(tdNu)//Muda o td especificado.
  }
})
function change(ele) {
  ele.innerHTML= input.value;
  input.value=''
  block.style.display='none'
  number()
}
function c(c) {
  console.log(c)
} 
block.addEventListener('focusout', ()=>{
  block.style.display='none'
})