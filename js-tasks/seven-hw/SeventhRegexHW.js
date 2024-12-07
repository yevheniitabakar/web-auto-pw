//TASK #1

function removeSpaces(input) {
    return input.replace(/^\s+|\s+$/g, '')
}

console.log(removeSpaces('   Hello, world!   '))
console.log(removeSpaces(' more text with spaces'))
console.log(removeSpaces('No spaces'))

//TASK #2
function findCapitalWords(sentence) {
    const capitalWords = sentence.match(/\b[A-Z][a-z]*\b/g)

    return capitalWords || [];
}

console.log(findCapitalWords("The Quick Brown Fox jumps over the Lazy Dog"))
console.log(findCapitalWords("no capital letter here"))
console.log(findCapitalWords("Only Capital"));

//TASK #3
function getLetterCount(text) {
    if (typeof text !== 'string') {
        throw new TypeError('Input must be a string')
    }

    const letters = text.toLowerCase().match(/[a-z]/g);

    if (!letters) {
        return {}
    }

    return letters.reduce((count, letter) => {
        count[letter] = (count[letter] || 0) + 1
        return count
    }, {})
}

console.log(getLetterCount("banana"))
console.log(getLetterCount("The short text"))
console.log(getLetterCount("123!@#"))