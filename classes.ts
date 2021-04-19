class Vehicle {
  public hunk(): void {
    console.log('beep')
  }
}

//A type of vehicle
//inheritance properies
class Car extends Vehicle {
  private drive(): void {
    console.log('moving now...')
  }
  startDriving(): void {
    this.drive()
  }
}

const car = new Car()
car.startDriving()
car.hunk()
