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

// ================== Change Button Color ==============//


const ChangeBoxColor =()=>{
  const boxContainer = document.getElementById('box');
  boxContainer.style.cssText = 'height: 200px; width: 200px; background-color: red; margin: 0 auto; border-radius: 6px;';
  const button = document.getElementById('btn');
  button.style.cursor='pointer';
 button.addEventListener('click',function(){
  const inputValue = document.getElementById('input').value;
if(isValidColor(inputValue)){
  boxContainer.style.backgroundColor= inputValue;

}
   else{
    alert('Invalid Color!!')
   }
 })
 
};

const isValidColor =(color)=>{
 const testDiv = document.createElement('div');
  testDiv.style.color=color;
  return testDiv.style.color !== '';

}

// =========== Call the Function =======//
ChangeBoxColor();

// ================== Digital Clock Function =================/
const setDigitalClock =()=>{
  const clock = document.getElementById('clock');
  const dateDiv = document.getElementById('date')
  let date = new Date();
  setInterval(function(){
    dateDiv.innerText= date.toDateString()
    clock.innerText= date.toLocaleTimeString()
  },1000)
}

// ================ Call Digital Clock Function =============//
setDigitalClock();