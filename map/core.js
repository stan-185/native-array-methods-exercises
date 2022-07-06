function multiplyBy10(array) {
  return array.map((ele) => ele * 10)
}

function shiftRight(array) {
  return array.map((ele, i, arr) => {
    if (i === 0) {
      return arr[arr.length - 1]
    } else {
      return arr[i - 1]
    }
  })
}

function onlyVowels(array) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  return array.map((ele) => {
    let newWord = ''
    for (let i = 0; i < ele.length; i++) {
      if (vowels.includes(ele.charAt[i])) {
        newWord += charAt[i]
      }
    }
    return newWord
  })
}

function doubleMatrix(array) {
  // your code here
}

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
}
