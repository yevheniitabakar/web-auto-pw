interface Employee {
    name: string,
    profession: string,
    workingHoursPerDay: number
}

interface PremiumData {
    isPremium: boolean,
    premium: number
}

const employee = {
    name: 'Alex Brown',
    profession: 'doctor',
    workingHoursPerDay: 10
}

const premiumData = {
    isPremium: true,
    premium: 1000
}

const payPerHour: number = 32
const workingDays: number = 14

const experienceCoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5,]

const getSalaryInfo = (employeeData: Employee, premiumData: PremiumData, payPerHour: number, workingDays: number, experienceCoefficients: number): string => {
    let salary: number;
    if (premiumData.isPremium) {
        salary = employeeData.workingHoursPerDay * payPerHour * workingDays * experienceCoefficients + premiumData.premium;
    } else {
        salary = employeeData.workingHoursPerDay * payPerHour * workingDays * experienceCoefficients;
    }

    return `${employee.profession} ${employee.name} has a salary of ${salary}$ this month`;
}

const salaryInfo: string = getSalaryInfo(employee,premiumData, payPerHour, workingDays, experienceCoefficients[2]);
console.log(salaryInfo);


//Task #2
function processData(param: string | number | boolean | number[]): string | number | boolean | number[] {
    if (typeof param === "string") {
      return param.toUpperCase();
    } else if (typeof param === "number") {
      return param ** 2;
    } else if (typeof param === "boolean") {
      return !param;
    } else if (Array.isArray(param)) {
      if (param.length === 0) {
        return "Empty array: []"
      } else {
        return param.map((num) => num ** 2)
      }
    }
    throw new Error("Unsupported parameter type")
  }
console.log(processData("text data")); // "TEXT DATA"
console.log(processData(3)); // 9
console.log(processData(false)); // true
console.log(processData([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(processData([])); // "Empty array: []"


//Task3
interface Triangle {
    base: number,
    height: number
}

interface Rectangle {
    width: number,
    height: number
}

interface Circle {
    radius: number
}

type Figure = Triangle | Rectangle | Circle

function getFigureInfo(figure: Figure): string {
    if ("base" in figure && "height" in figure) {
      const area = (figure.base * figure.height) / 2
      return `Triangle with base ${figure.base} and height ${figure.height} has an area of ${area}`
    } else if ("width" in figure && "height" in figure) {
      const area = figure.width * figure.height
      return `Rectangle with width ${figure.width} and height ${figure.height} has an area of ${area}`
    } else if ("radius" in figure) {
      const area = Math.PI * figure.radius ** 2
      return `Circle with radius ${figure.radius} has an area of ${area.toFixed(2)}`
    }
    throw new Error("Unknown figure type")
  }

console.log(getFigureInfo({ base: 10, height: 5 }))
console.log(getFigureInfo({ width: 4, height: 7 }))
console.log(getFigureInfo({ radius: 3 }))