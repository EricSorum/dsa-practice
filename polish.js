const example = "2 12 + 7 /";

function ReversePolishNotation(str) { 
  const splitStr = str.split(" ");
  // let expressionArr = [];
  let answer = Number(splitStr(0));  // initiate answer.
  let operator;
  let firstNum;
  let secondNum;
  for (let i = 0; i < splitStr.length; i++) {

    if (Number(splitStr[i])) {
      if (Number(splitStr[i-1])) {
        secondNum = num;
      } else {
        firstNum = num;
      }
      
    } else {
      // if it's not a number, then it must be an operator.
      operator = splitStr[i];
      // Then we would go ahead and do the operation.


      // logic would be that if there is no second number, 
      if (Number(splitrStri[i+1])) {
      // you would use the answer as the first number and first number as second...
        answer = answer 
      }
    
      if (secondNum) {
        
      }
      
        // At end of operation we reset nums?
        let firstNum = undefined;
        let secondNum = undefined;
    }

    // first check if operator - change operator if so
    function handleOperation(firstNum, secondNum) {
    let operationResult;
      switch (splitStr[i]) {
        case "+":
          operationResult = firstNum+secondNum;
          break;
        case "-":
          operationResult = firstNum-secondNum;
          break;
        case "*":
          operationResult = firstNum*secondNum;
          break;
        case "/":
          operationResult = firstNum/secondNum;
          break;
      }
    }

  }
  str = answer;
  return str; 

}
   
// keep this function call here 
console.log(ReversePolishNotation(example));




// keep this function call here 
console.log(ReversePolishNotation(readline()));