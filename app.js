let randomNumber=parseInt( Math.random() * 100 + 1 );

 
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.LowOrHi');
const satrtOver=document.querySelector('.resultParas');

const p=document.createElement('p')


let prevGuess= []
let numberGuess=1
let playgame=true

if(playgame){
    submit.addEventListener('click',function(e){
e.preventDefault();
const guess=parseInt(userInput.value)
        validateGuess(guess);
    })
}


function validateGuess(guess){
        if(isNaN(guess) ){
            alert('Please Enter a valid Number ')
        }
        else if(guess < 1){
            alert('Please Enter a  number more than 1 ')
        }
        else if(guess >100){
            alert('Please Enter a number less than 100 ')
        }
        else{
            prevGuess.push(guess)
            if(numberGuess==11){
                displayGuess(guess)
                displaymessage(`Game Over. Random Number Was:-${randomNumber}`)
                endGame()
            }
            else{
                displayGuess(guess)
                checkGuess(guess)   
            }
        }
    }

function checkGuess(guess){
        if(guess===randomNumber){
            displaymessage(`You Guess the right Number`)
            endGame()
        }
        else if(guess<randomNumber){
                displaymessage( `Value is Low than RandomNumber `)
        }
        else if(guess>randomNumber){
                displaymessage( `Value is High than RandomNumber `)
        }
}



function displayGuess(guess){
            userInput.value=''
            guessSlot.innerHTML +=`${guess},`
            numberGuess++;
            remaining.innerHTML=`${11-numberGuess}`
}



function displaymessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`

}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
            p.classList.add('button')
            p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
            satrtOver.appendChild(p)
            playgame=false;
            newGame();
}



function newGame(){
     const newGameButton=   document.querySelector('#newGame')
        newGameButton.addEventListener('click',function(e){
           randomNumber=parseInt( Math.random() * 100 + 1 )
           prevGuess=[]
           numberGuess=1
           guessSlot.innerHTML=''
           remaining.innerHTML=`${11-numberGuess}`
           userInput.removeAttribute('disabled')
           satrtOver.removeChild(p)
                playgame=ture;
        })
}