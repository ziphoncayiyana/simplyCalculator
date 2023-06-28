const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

let calculation = [];
let accumulativeCalculator;

function calculate(button){
    const value = button.textContent;

    if (value === 'CLEAR'){
        calculation = [];
        screenDisplay.textContent = '';
    } else if(value === '='){
        screenDisplay.textContent = eval(accumulativeCalculator);
    } else{
        calculation.push(value);
        accumulativeCalculator = calculation.join('');
        screenDisplay.textContent = accumulativeCalculator; 
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)));