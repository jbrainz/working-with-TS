const add = (a: number, b: number): number => {
  return a + b
}

const substract = (a: number, b: number): number => a - b

function devide(a: number, b: number): number {
  return a / b
}

const multiply = function (a: number, b: number): number {
  return a * b
}

const logger = (message: string) => console.log(message)

const throwError = (message: string): void => {
  if (!message) throw new Error(message)
}

const todaysWeather = {
  date: new Date(),
  weather: 'Rainy',
}

const logWeather = ({
  date,
  weather,
}: {
  date: Date
  weather: string
}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)
