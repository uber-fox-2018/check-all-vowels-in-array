function generateBoard(row, column) {
    let mainBoard = []
    let alphabet = 'ABCDEFGHILMNOAAAAAIIIIEEEUUUOOOOOO'

    for (let i = 0; i < row; i++) {
        let miniBoard = []
        for (let j = 0; j < column; j++) {
            let random = Math.trunc(Math.random() * alphabet.length)
            miniBoard.push(alphabet[random])
        }
        mainBoard.push(miniBoard)
    }
    return mainBoard
}

function checkVowel(str) {
    let vocals = 'AIUEO'
    let output = ''

    for (let i = 0; i < str.length; i++) {
        for(let j = 0; j < vocals.length; j++) {
            if (str[i] == vocals[j]) {
                output += str[i]
            }
        }
    }

    if (output.length == str.length) {
        return true
    } else {
        return false
    }
}

function boxVowel() {
    let mainBoard = generateBoard(5,4)
    let mainArr = []
    let onlyVowel = []

    for (let i = 0; i < mainBoard.length-1; i++) {
        for (let j = 0; j < mainBoard[i].length-1; j++) {
            var arr = []
            arr.push(mainBoard[i][j])
            arr.push(mainBoard[i][j+1])
            arr.push(mainBoard[i+1][j])
            arr.push(mainBoard[i+1][j+1])
        }
        mainArr.push(arr)
    }

    for (let i in mainArr) {
        let str = mainArr[i].join('')
        
        if (checkVowel(str)) {
            onlyVowel.push(str)
        } 
    }
    console.log(mainBoard)
    return onlyVowel
}

console.log(boxVowel())