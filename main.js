
let add = (a, b) => {
  return Math.round(a + b) / 100
}

let subtract = (a, b) => {
  return Math.round(a - b) / 100
}

let multiply = (a, b) => {
  return Math.round(a * b)
}

let divide = (a, b) => {
  return Math.round(a / b) / 100
}

let firstNum = 0
let operator = 0
let secondNum = 0
let result = 0

let operate = (operator, firstNum, secondNum) => {

  switch (operator) {
    case "add":
      return add(firstNum, secondNum)
    case "multiply":
      return multiply(firstNum, secondNum)
    case "subtract":
      return subtract(firstNum, secondNum)
    case "divide":
      return divide(firstNum, secondNum)
    default:
      return "ERROR"
  }
}

const screen = document.querySelector(".text")
screen.textContent = 0

const buttonsContainer = document.querySelector(".buttons")

let currentScreen = ["0"]

buttonsContainer.addEventListener("click", (e) => {

  let buttonClicked = e.target.innerHTML

  if (result !== 0 && !isNaN(buttonClicked)) {
    currentScreen = [buttonClicked]
    operator = 0
    firstNum = 0
    secondNum = 0
    result = 0
    screen.textContent = buttonClicked
    return
  }

  if (buttonClicked === "C") {
    currentScreen = ["0"]
    operator = 0
    firstNum = 0
    result = 0
    secondNum = 0
    screen.textContent = 0
    return
  }


  if (buttonClicked && result === 0) {

    if (buttonClicked === "-" && (currentScreen.length <= 1 && currentScreen.includes("0"))) {
      currentScreen.unshift(buttonClicked)
    } else if (buttonClicked === "." && !currentScreen.includes(".")) {
      currentScreen.push(buttonClicked)
    } else if (buttonClicked === "0" && (![".", "1", "2", "3", "4", "5", "6", "7", "8", "9"].some(item => currentScreen.includes(item)))) {
    } else if ((+buttonClicked >= 0) || (+buttonClicked <= 9)) {
      if (((currentScreen.length < 2 && currentScreen[0] === "0") || (currentScreen[0] === "-" && currentScreen[1] === "0")) && (!currentScreen.includes("."))) {
        currentScreen[currentScreen.indexOf("0")] = buttonClicked
      } else { currentScreen.push(buttonClicked) }
    } else if (buttonClicked === "/") {
      if (Number(currentScreen.join("")) !== 0 && operator === 0) {
        operator = "divide"
        firstNum = Number(currentScreen.join(""))
        currentScreen = ["0"]
      } else {
        currentScreen = ["b", "r", "u", "h", ".", ".", "."]
      }
    } else if (buttonClicked === "x") {
      if (operator === 0) {
        operator = "multiply"
        firstNum = Number(currentScreen.join(""))
        currentScreen = ["0"]
      } else { }
    } else if (buttonClicked === "-") {
      if (operator === 0) {
        operator = "subtract"
        firstNum = Number(currentScreen.join(""))
        currentScreen = ["0"]
      } else { }
    } else if (buttonClicked === "+") {
      if (operator === 0) {
        operator = "add"
        firstNum = Number(currentScreen.join(""))
        currentScreen = ["0"]
      } else { }
    } else if (buttonClicked === "=") {
      if (operator === 0) {
      } else {
        secondNum = Number(currentScreen.join(""))
        result = operate(operator, firstNum, secondNum)
        if (result === Infinity) { screen.textContent = "Zero division" } else { screen.textContent = result }
      }
    }
  } else {
    screen.textContent = "0"
    screen.textContent = String(result).slice(0, 12)
  }

  if (buttonClicked !== "=") {
    let str = currentScreen.join("")
    let value = Number(str)
    screen.textContent = currentScreen.join("").slice(0, 12)
    console.log(value);
  }
}
)