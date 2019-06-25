let min = 1 ,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

    const game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessesBtn = document.querySelector('#guess-btn'),
        guessesInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

        minNum.textContent = min;
        maxNum.textContent = max;

        guessesBtn.addEventListener('click',function(){
            let guess = parseInt(guessesInput.value);

            if(isNaN(guess) || guess < min || guess > max){
                setMessage(`Please enter a number between ${min} and ${max}`,'red');
  
            }
            if(guess === winningNum){
                guessesInput.disabled = true;

                guessesInput.style.borderColor = 'green';

                setMessage(`${winningNum} is correct, YOU WIN!`,'green');
            }

        });

        function setMessage(msg,color){
            message.style.color = color;
            message.textContent = msg;
        }
        
