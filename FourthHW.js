//Task #1 

const scores = {
    programming: 88,
    design: 74,
    jurisprudence: false,
    relational_DB: 92,
    computerGraphics: "submitted",
    patterns: 65,
    philosophy: "transferred",
    network: 81};

    for (const key in scores) {
        if(typeof scores[key] !== "number") {
            delete scores[key]
        }
    }

    console.log(scores)

//Task #2
class Student {
    #direction

    constructor(fullName, direction) {
        this.fullName = fullName
        this.#direction = direction
    }

    showFullName() {
        return this.fullName
    }

    nameIncludesData(data) {
        return this.showFullName().includes(data)
    }

    static studentBuilder() {
        return new Student('Ihor Kohut', 'QC')
    }

    get direction() {
        return this.#direction
    }

    set direction(direction) {
        this.#direction = direction
      }
}

const stud1 = new Student('Ivan Petrenko', 'web')
const stud2 = new Student('Sergiy Koval', 'python')
const stud3 = Student.studentBuilder()

console.log(stud1.showFullName())
console.log(stud1.nameIncludesData('Ivan'))
console.log(stud2.direction)
stud2.direction = 'data science'
console.log(stud2.direction)
console.log(stud3.showFullName())
console.log(stud3.direction)


//Task #3
class Plane {

    constructor(model ,fuelSupply, fuelConsumption) {
        this.model = model
        this.fuelSupply = fuelSupply
        this.fuelConsumption = fuelConsumption
    }

    calcFlightRange() {
        return Math.round((this.fuelSupply / this.fuelConsumption) * 100)
    }

    static sortFlightRange(planesArray) {
        planesArray.sort((a, b) => a.calcFlightRange() - b.calcFlightRange())
        planesArray.forEach(plane => {
            console.log(`${plane.model} - flight range: ${plane.calcFlightRange()} км`)            
        })
    }
}

class TransportPlane extends Plane{

    constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
        super(model, fuelSupply, fuelConsumption)
        this.cargo = cargo
        this.addTank = addTank
    }

    calcFlightRange() {
        return Math.round(((this.fuelSupply + this.addTank) / this.fuelConsumption) * 100)
    }
}

class PassengerPlane extends Plane{

    constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
        super(model, fuelSupply, fuelConsumption)
        this.passengers = passengers
        this.refueling = refueling
    }

    calcFlightRange() {
        return Math.round(((this.fuelSupply + this.refueling) / this.fuelConsumption * 100))
    }
}

class WarPlane extends Plane{

    constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKof) {
        super(model, fuelSupply, fuelConsumption)
        this.missiles = missiles
        this.aerodynamicsKof = aerodynamicsKof
    }

    calcFlightRange() {
        const baseRange = super.calcFlightRange()
        return baseRange * this.aerodynamicsKof
    }
}

console.log("Unsorted range of planes:")
const plane1 = new TransportPlane("An-225 Mriya", 105000, 5000, 500, 300000)
console.log("An-225 Mriya: ", plane1.calcFlightRange())
const plane2 = new PassengerPlane("Boeing-747", 193000, 2500, 410, 90000)
console.log("Boeing-747:", plane2.calcFlightRange())
const plane3 = new WarPlane("F-22 Raptor", 8200, 320, 20, 1.2)
console.log("F-22 Raptor:", plane3.calcFlightRange())
console.log("Sorted range of planes:")
const planesArray = [plane1, plane2, plane3]
Plane.sortFlightRange(planesArray)


//Task #4 
class Library{
    constructor(name) {
        this.name = name
        this.books = []
    }

    addBook(book) {
        this.books.push(book)
        console.log(`Book ${book} added to ${this.name}.`)
    }

    removeBook(book) {
        const bookIndex = this.books.indexOf(book)
        if (bookIndex !== -1) {
          this.books.splice(bookIndex, 1)
          console.log(`Book ${book} removed from ${this.name}.`)
        } else {
          console.log(`Book ${book} does not exist in ${this.name}.`)
        }
      }

      displayBooks() {
        console.log(`Books in ${this.name}:`)
        if (this.books.length > 0) {
          this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book}`)
          })
        } else {
          console.log("No books available.")
        }
      }
    }

const library = new Library("JS library")
library.displayBooks()
library.addBook("Javascript: The Definitive Guide - David Flanagan")
library.addBook("You don`t know JS - Kyle Simpson")
library.addBook("Eloquent JavaScript, 4th Edition - Marijn Haverbeke")
library.displayBooks()
library.removeBook("Javascript: The Definitive Guide - David Flanagan")
library.displayBooks()
