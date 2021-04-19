interface Report {
  summary(): string
}
const oldCivic = {
  name: 'civic',
  year: 2003,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  },
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 30,
  summary(): string {
    return `My drink has ${this.sugar} content`
  },
}

const printSummary = (item: Report): void => {
  console.log(item.summary)
}

printSummary(oldCivic)
printSummary(drink)
