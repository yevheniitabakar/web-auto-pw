//Tsk #1 
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    contact: {
    email: "john.doe@example.com",
    phone: "123-456-7890"
    },
    address: {
    city: "New York",
    country: "USA"
    }
}

function getUserInfo( { firstName, lastName, contact: { email, phone }, address: { city } } ) {
    console.log("First name: " + firstName + "\nLast name: " + lastName + "\nEmail: " + email + "\nPhone: " + phone + "\nCity: " + city)
}

getUserInfo(user)

//Task #2
const cars = ["BMW", "Opel", "Audi", "VW", "Toyota", "BMW", "VW", "Nissan", "BMW"]

function countCars(cars) {
    const carCountMap = new Map()

    cars.forEach(car => {
        if (carCountMap.has(car)) {
            carCountMap.set(car, carCountMap.get(car) + 1)
        } else {
            carCountMap.set(car, 1)
        }
    })
    return carCountMap
}

console.log(countCars(cars))

//Task #3 
const knownCredentials = new Map([
    ["admin", "qwerty123456"],
    ["userName2", "password2"],
    ["userName3", "password3"]
  ])

function checkLogin(userName, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (knownCredentials.get(userName) === password) {
                resolve(`Welcome ${userName}!`)
            } else {
                reject(`Wrong credentials or password for: ${userName}`)
            }
        }, 2000)
    })
}

checkLogin("userName2", "qwerty123456")
    .then((message) => console.log(message))
    .catch((error) => console.log(error))


//Task #4
const existingUserIds = [2]

async function loadUserProfile(userId) {
    try {
        const userProfile = await fetchUserProfile(userId)
        const userPosts = await fetchUserPosts(userId)
        return { userProfile, userPosts }
    } catch (error) {
        return "Error on loading user data for user ID " + userId
    }
}

function fetchUserProfile(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (existingUserIds.includes(userId)) {
        resolve({ userId, name: "John Doe", age: 30 })
      } else {
        reject("Unknown user ID " + userId)
      }
    }, 1000)
  })
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    if (existingUserIds.includes(userId)) {
      resolve([
        { postId: 1, content: "Hello, world!" },
        { postId: 2, content: "Loving this app!" },
      ])
    } else {
      reject("Unknown user ID " + userId)
    }
  }, 2000)
}

loadUserProfile(1)
.then((data) => console.log(data))
.catch((error) => console.log(error))