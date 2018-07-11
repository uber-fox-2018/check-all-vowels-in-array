function generateBoard(row,col) {
    let dictionary = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','i','u','e','o','a','a','i','i','i','i','u','a','a','i','i','u','a','a','i','i','u','a','a','i','i','u']
    let output = []

    for (let i = 0; i < row; i++) {
        let newArr = []
        for (let j = 0; j < col; j++) {
            let random = Math.floor(Math.random()*dictionary.length)
            newArr.push(dictionary[random])
        }
        output.push(newArr)
    }
    return output
}

function checkVowels(string) {
    let dictionary = ['a','i','u','e','o'];
    let newString = ''

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < dictionary.length; j++) {
            if (string[i] === dictionary[j]) {
                newString += string[i]
            }
        }
    }

    if (newString.length === string.length) {
        return true
    }else {
        return false
    }
}


function check2x2() {
    let board = generateBoard(5,4)
    let output = []
    console.log(board);
    
    
    for (let i = 0; i < board.length-1; i++) {
        for (let j = 0; j < board.length-2; j++) {
            let string2x2 = ''
            string2x2 += board[i][j] + board[i][j+1] + board[i+1][j+1] + board[i+1][j]
            if (checkVowels(string2x2)) {
                output.push(string2x2)
            }
        }
    }
    return output
}

console.log(check2x2());

