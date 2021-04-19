const carMakers = ['one', 'two', 'three']

const dates = [new Date(), new Date()]

const carsByMake: string[][] = []

//Help with inference when extracting values
const car = carMakers[0]
const newCar = carMakers.push('four')

//helps incompatible values
// carMakers.push(100)

//Helps with 'map'
carMakers.map((e: string): string => {
  return e.toUpperCase()
})

//flexible types
const importantDates: (Date | string)[] = [new Date(), '2005: 5: 7']
