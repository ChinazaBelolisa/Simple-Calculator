const button = document.querySelector('#btn-calculate');
button.addEventListener('click',function(event){
  const firstNum = Number(document.querySelector('#first-num').value);
  const secondNum = Number(document.querySelector('#second-num').value);
  const operation = document.querySelector('#math-operator').value;
  const resultElement = document.querySelector("#result");
  
  if(operation === "add"){
    // perform the calculation and return the result
    resultElement.innerHTML = firstNum + secondNum;
  } else if(operation === "sub"){
    resultElement.innerHTML = firstNum - secondNum;
  } else if(operation === "mult"){
    resultElement.innerHTML = firstNum * secondNum;
  }else if(operation === "div"){
    resultElement.innerHTML = firstNum / secondNum;
  } else {
    resultElement.innerHTML = firstNum % secondNum;
  }
});