console.log('connected');

const buttons = document.querySelectorAll('.button');
const body = document.getElementById('body');

buttons.forEach(button=>{
    button.style.cursor='pointer'
    
    button.addEventListener('click',function(e){
       if (e.target.id ==='grey') {
        body.style.backgroundColor=e.target.id
       }
      else if(e.target.id ==='white'){
        body.style.backgroundColor=e.target.id
       }
       else if(e.target.id==='blue'){
        body.style.backgroundColor=e.target.id
       }
       else if(e.target.id==='yellow'){
        body.style.backgroundColor=e.target.id
       }

    })
})