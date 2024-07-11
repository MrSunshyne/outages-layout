// Write a function to add two numbers

function addition(a, b) {
    return a + b
}
// let sum = addition(23, 17)
// console.log(sum)

// write a function to multiply two numbers
function multiply(a, b) {
    return a * b
}

// multiplty(60, 33)

// write a function that takes two numbers, 
///adds them, and multiplies the result by the 2nd number

function complicatedOperation(number_1, number_2) {
    let sum = addition(number_1, number_2)
    let result = multiply(sum, number_2)
    return result
}

// const value = complicatedOperation(5, 8)
// console.log(value)


function addElements() {
    let number1 = document.getElementById('number1')
    let number2 = document.getElementById('number2')
    let display = document.getElementById('display')

    let number1Value = parseInt(number1.innerHTML)
    let number2Value = parseInt(number2.innerHTML)

    let result = addition(number1Value, number2Value)
    display.innerHTML = result    
    // console.log the sum of number1 and number2
}

addElements()