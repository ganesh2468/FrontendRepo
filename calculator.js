let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenvalue= '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;//get what is written in button
        console.log('button text is',buttonText);
        if(buttonText=='C'){
            screenvalue= "";
            screen.value=screenvalue;
        }
        else if(buttonText=='='){
                screen.value=eval(screenvalue);
        }
        else{
            screenvalue+=buttonText;
            screen.value=screenvalue;
        }
    })
}
