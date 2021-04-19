let apples: number = 40
let speed: string = 'Super Fast'
let fast: boolean = true
let nothing: null = null
let empty: undefined = undefined

//BUILT IN OBJECTS

let date: Date = new Date()

//Array

let colors: string[] = ['red', 'yellow', 'maroon']

let numbers: number[] = []
let trueOrFalse: boolean[] = [true, false, false, true]

//classes
class Car {}

let car: Car = new Car()

//Object literal
let points: { x: number; y: number } = {
  x: 4,
  y: 20,
}

//FUNCTION

const logNumber: (i: number) => void = (i) => {
  console.log(i)
}

//WHEM TO USE ANNOTATIONS
// 1)  FUNCTION THAT RETRUNS THE 'ANY' TYPE
const json = '{ "x": 20, "y": 15 }'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates)

// 3.) WHEN DEFINING A VARIABLE AND ASSIGNING IT LATER.
let words = ['red', 'green', 'blue', 'yellow']
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
  if (words[1] === 'blue') foundWord = true
}

//VARIABLE WHOSE TYPE CANNOT BE INFERRED CORRECTLY
let anotherNumbers = [-10, -1, 12]
let numbersAboveTen: number | boolean = false

for (let i = 0; i < numbers.length; i++) {
  if (anotherNumbers[i] > 0) {
    numbersAboveTen = anotherNumbers[i]
  }
}
