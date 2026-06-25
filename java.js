/* document.getElementById();
 document.getElementsByClassName('element');
 document.getElementsByName();
 document.getElementsByTagName();
 innerHTML
 innerText
 textcontex
 document.querySelector('.');
 document.querySelectorAll();

document.getElementById('updater').innerHTML='javascript is Awesome';
document.getElementsByClassName('upd')[0].innerHTML='i cryy';
document.getElementsByClassName('upd')[1].innerHTML='cryy less';
document.getElementsByTagName('h3')[0].innerText='This is Manful';

document.getElementsByName('btn') [0].addEventListener('click',
function (){
    alert(document.getElementsByName('fname')[0].value);
    alert(document.getElementsByName('lname')[0].value);
});*/


let rtn = document.querySelector('.rtn')


const btn = document.querySelectorAll('.action');
const typing = document.querySelector('.typing');
const answer = document.querySelector('.answer');
const equal = document.querySelector('.equalSign');
const clear = document.querySelector('.clear');
const bkspace = document.querySelector('.bkspace');
const square_root = document.querySelector('.square_root')
const Turnon = document.querySelector('.on_btn')
const calcscreen = document.querySelector('.calculator_screen')
const Turnoff = document.querySelector('.off_btn')


for(let x = 0; x < btn.length; x++){
     btn[x].onclick = function(){
        if(typing.innerText === '0')typing.innerText = '';
        typing.innerText += btn[x].innerText;
        if(typing.innerText.search('Exp') != 1)typing.innerText = typing.innerText.replace('Exp','**');

    }
}
   
equal.onclick = function(){
    if(typing.innerText.startsWith('√')) {
        answer.innerText = Math.sqrt(typing.innerText.replace('√', ''));

        return;
    }

    if(typing.innerText.startsWith('sin')){
        answer.innerText = Math.sin(typing.innerText.replace('sin', ''));
    }

    if(typing.innerText.startsWith('cos')){
    answer.innerText = Math.cos(typing.innerText.replace('cos', ''));
    }
    
    if(typing.innerText.startsWith('tan')){
    answer.innerText = Math.tan(typing.innerText.replace('tan', ''));
    }
    // return;

    rtn.innerText = typeof typing.innerText;
    answer.innerText = eval(typing.innerText);
}

clear.onclick = function(){
    typing.innerText = 0;
    answer.innerText = '';
}

bkspace.onclick = function(){
    typing.innerText = typing.innerText.slice(0, -1);
    if(typing.innerText.length === 0)typing.innerText = 0;
}

// in javacript the squaare root function is given by math.sqrt
square_root.onclick = function(){
    typing.innerText = this.innerText;
    // answer.innerText = Math.sqrt(typing.innerText);
}


Turnon.onclick = function(){
    typing.innerText = 'welcome!';
    calcscreen.classList.add('off')
    let tibtn = document.querySelectorAll('.ti');

    setTimeout(function(){
        for( let x = 0; x < tibtn.length; x++){
            tibtn[x].disabled = false;
        }
        typing.innerText = 0;
        Turnon.disabled = true;
        calcscreen.classList.remove('off');   
    }, 2000);
}

Turnoff.onclick = function(){
    typing.innerText = 'Goodbye!';
    answer.innerText = "";
    calcscreen.classList.add('on')
    let nibtn = document.querySelectorAll('.ni');

    setTimeout(function(){
        for(let x = 0; x < nibtn.length; x++){
            nibtn[x].disabled = true;
        }
        
        calcscreen.classList.remove('on');
        // calcscreen.innerText= ""
        // calcscreen.innerText = "";
        Turnon.disabled = false;
        Turnoff.disabled = true;
        typing.innerText = '';

    }, 2000);         
}
