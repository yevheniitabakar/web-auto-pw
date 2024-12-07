//1-st

function minutesToTimeString(minutes) {
    if (minutes < 0) {
      return "Invalid input value " + minutes;
    }
  
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    console.log(hours);
    console.log(minutes);
  

    console.log(`${hours}:${remainingMinutes.toString()}`);
    return `${hours}:${remainingMinutes.toString()}`;
  }

  minutesToTimeString(82);
  minutesToTimeString(47);
  minutesToTimeString(127);

  //2-nd


  function calculate() {
    const num1 = parseFloat(prompt("Enter first number:"));
    const num2 = parseFloat(prompt("Enter second number:"));
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid data");
      return;
    }
  
    const sum = num1 + num2;
    const difference = Math.abs(num1 - num2);
    const product = num1 * num2;
    const quotient = num1 / num2;
  
    alert(`
      Summ: ${sum}
      Dif: ${difference}
      Prod: ${product}
      Quot: ${quotient}
    `);
  }
  
  calculate();


//3-rd  

let x = 1;
let y = 2;

let res1 = x + "" + y // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"


let res2 = true + "" + y // Допишіть код, необхідно використовувати змінні x і y

console.log(res2); // "true2"

console.log(typeof res2); // "string"


let res3 = y > x // Допишіть код, необхідно використовувати змінні x і y

console.log(res3); // true

console.log(typeof res3); // "boolean"


let res4 = parseFloat(Boolean(x)) // Допишіть код, необхідно використовувати змінні x і y

console.log(res4); // NaN

console.log(typeof res4); // "number"

//4-rd

function rateScoreIfStatement(score) {
  if (score >= 0 && score <= 100) {
    if (score >= 88) {
      console.log("Excellent!");
    } else if (score >= 71) {
      console.log("Good!");
    } else if (score >= 50) {
      console.log("Satisfied!");
    } else {
      console.log("Unsatisfied!");
    }
  } else {
    console.log("Incorrect assessment!!");
  }
}

rateScoreIfStatement(66)

function rateScoreSwitch(score) {
  switch (true) {
    case score >= 88:
      console.log("Excellent!");
      break;
    case score >= 71:
      console.log("Good!");
      break;
    case score >= 50:
      console.log("Satisfied!");
      break;
    case score >= 0:
      console.log("Unsatisfied!");
      break;
    default:
      console.log("Incorrect assessment!!");
  }
}

rateScoreSwitch(90)


//5-

function multipleCheck() {
  for (let i = 1; i <= 50; i++) {
    let output = i.toString();

    
    if (i % 2 === 0 && i % 4 === 0) {
        output += " kratne 2 & 4!";
    } else if (i % 2 === 0) {
        output += " kratne 2!";
    } else if (i % 4 === 0) {
        output += " kratne 4!";
    }

    console.log(output);
    }
}

multipleCheck()

//6 


function checkPrimeNumber(number) {
  if (number <= 1) {
  console.log(number + " is not a prime number")
} else if (number % number === 0 && number % 2 !== 0 && number % 3 !== 0) {
  console.log(number + " is a prime number!")
} else {
  console.log(number + " is not a prime number")
}
}

checkPrimeNumber(7)
checkPrimeNumber(16)