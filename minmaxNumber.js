const firstNumber= document.querySelector("#firstNumber");
const secondNumber= document.querySelector("#secondNumber");
const thirdNumber= document.querySelector("#thirdNumber");
const checkMinBtn= document.querySelector("#checkmin");
const checkMaxBtn= document.querySelector("#checkmax");
const clearBtn= document.querySelector("#clear");
const showAnswer= document.querySelector(".answerArea");


//funtion to find the minimum nunber
const checkMinimumNumber = () => {
    const firstNumber= document.querySelector("#firstNumber");
    const secondNumber= document.querySelector("#secondNumber");
    const thirdNumber= document.querySelector("#thirdNumber");
    const checkMinBtn= document.querySelector("#checkmin");
    const checkMaxBtn= document.querySelector("#checkmax");
    const clearBtn= document.querySelector("#clear");
    const showAnswer= document.querySelector(".answerArea");
    

    const firstValue = firstNumber.value;
    const secondValue = secondNumber.value;
    const thirdValue = thirdNumber.value;


    if (firstValue < secondValue && firstValue < thirdValue) {
        showAnswer.textContent = `Minimum Number is = ${firstValue}`;

    }
    else if(secondValue < firstValue && secondValue < thirdValue) {

        showAnswer.textContent = `Minimum Number is = ${secondValue}`;
    }

    else if(thirdValue < firstValue && thirdValue <secondValue){
        showAnswer.textContent = `Minimum Number is = ${thirdValue}`;
    }

    else {
        showAnswer.textContent = `Minimum Number is not available`;
    }
};

//function to check the maximum number

const checkMaximumNumber = () => {
    const firstNumber= document.querySelector("#firstNumber");
    const secondNumber= document.querySelector("#secondNumber");
    const thirdNumber= document.querySelector("#thirdNumber");
    const checkMinBtn= document.querySelector("#checkmin");
    const checkMaxBtn= document.querySelector("#checkmax");
    const clearBtn= document.querySelector("#clear");
    const showAnswer= document.querySelector(".answerArea");
    
        const firstValue = firstNumber.value;
        const secondValue = secondNumber.value;
        const thirdValue = thirdNumber.value;
    
    
        if (firstValue > secondValue && firstValue > thirdValue) {
            showAnswer.textContent = `Maximum Number is = ${firstValue}`;
    
        }
         else if(secondValue > firstValue && secondValue > thirdValue) {
    
            showAnswer.textContent = `Maximum Number is = ${secondValue}`;
        }
    
       else if (thirdValue > firstValue && thirdValue > secondValue){
            showAnswer.textContent = `Maximum Number is = ${thirdValue}`;
        }
    
        else {
            showAnswer.textContent = `Maximum Number is not available`;
        }
    };

//function to clear all inputs
    const clear = () => {
        showAnswer.textContent = "";
        firstNumber.value = "";
        secondNumber.value = "";
        thirdNumber.value = "";
    
      };


 checkMinBtn.addEventListener("click", checkMinimumNumber);
 checkMaxBtn.addEventListener("click", checkMaximumNumber);
clearBtn.addEventListener("click", clear);