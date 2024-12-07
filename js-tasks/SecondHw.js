//Tast #1 

function processData(num1 = 0, num2 = 0, action = "sum") {
    switch (action) {
        case "sum":
            result = num1 + num2
            console.log(`Sum of ${num1} and ${num2} is --> ${result}`)
            break;
        case "product":
            result = num1 * num2
            console.log(`Product of ${num1} and ${num2} is --> ${result}`)
            break;
        case "square":
            result = num1 ** num2
            console.log(`square of ${num1} and ${num2} is --> ${result}`)
            break
        default:
            console.log(`Unknown action recieved --> ${action}`)    
    }
}

processData(1, 4, 3)

//Task #2

const arr = [1,true, NaN, null, "Bob", "10"]

function findElement(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            return true
        }
    }
    return false
}

console.log(findElement(arr, "1"))
console.log(findElement(arr, "10"))


//Task #3
const arr3 = [1,true, NaN, null, "Bob", "10"]

function deleteItem(arr, item) {
    return arr.filter(element => element !== item)
}

console.log(deleteItem(arr3, 10))

//Task #4

function getCircleLength(r) {
    if (typeof r !== 'number' || r <= 0) {
        throw new Error(`Incorrect radius value <${r}> \nEnter numeric value!`)
    }
    return Math.round(2 * Math.PI * r)
}

console.log(getCircleLength(12))
getCircleLength("Hello")
getCircleLength("10")
getCircleLength(null)
getCircleLength()

//Task #5

function checkID() {
    try {
        const userID = prompt("Please enter your ID")

        if (userID === "") {
            throw new Error("The field is empty! Please enter your ID.")
        }
        if (isNaN(userID)) {
            throw new Error("Invalid input! Please enter a numeric value.")
        }
        
        const idNumber = Number(userID)

        if (idNumber < 1 || idNumber > 1000) {
            throw new Error("ID out of range! Please enter a value between 1 and 1000.")
        }

        alert("Your ID is valid!")
    } catch (error) {
        alert(`Error: ${error.name} - ${error.message}`)
        console.error(`${error.name}: ${error.message}`)
    }
}

checkID()

//Task #6

function findArrDiff(arr1, arr2) {
    const uniqueArr1 = arr1.filter(item => !arr2.includes(item))
    const uniqueArr2 = arr2.filter(item => !arr1.includes(item))

    return uniqueArr1.concat(uniqueArr2)
}

console.log(findArrDiff([5, 10, 20], [0, 10, 20, 30]))

