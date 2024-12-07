function display(message: string): void
function display(message1: string, message2: string): void
function display(messages: string[]): void

function display(arg1: string | string[], arg2?: string): void {
    if (typeof arg1 === "string" && typeof arg2 === "undefined") {
        console.log(arg1)
    } else if (typeof arg1 === "string" && typeof arg2 === "string") {
        console.log(arg1)
        console.log(arg2)
    } else if (Array.isArray(arg1)) {
        arg1.forEach(message => console.log(message))
    } else {
        throw new Error("Invalid arguments")
    }
}

display("Hello, World!")
display("Hello", "World!")
display(["Hello", "World", "!"])


//Task#2
type WithRating = { rating: number }

function identify<T extends WithRating>(items: T[]): number {
    if (items.length === 0) {
        throw new Error("Array cannot be empty")
    }

    let totalRating = 0
    items.forEach(item => { totalRating += item.rating })

    return totalRating / items.length
}

console.log(identify([{name: "Anna", rating: 3}])) // 3
console.log(identify([{title: "Encounter", rating: 3}, {title: "Dead to me", rating: 4}, {title: "Riverdale", rating: 5}]))


//Task#3
function WithEmploymentDate(target: any, context: any): any {
    target.prototype.employeeData = new Date()
}

@WithEmploymentDate
class Manager {
    task: string = 'Simple task'
    project: string = 'Simple project'
    employeeData?: Date
    
    constructor(){
    console.log('Initializing the Manager class')
    }
}

const manager = new Manager()
console.log(manager.employeeData)