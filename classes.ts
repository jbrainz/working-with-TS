class Vehicle {
  drive(): void {
    console.log('chugga chugga')
  }
  hunk(): void {
    console.log('beep')
  }
}

//A type of vehicle
//inheritance properies
class Car extends Vehicle {
  drive(): void {
    console.log('moving now...')
  }
}

const car = new Car()
car.drive()
car.hunk()
