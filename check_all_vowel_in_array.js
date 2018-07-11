let generateBoard = function (row, col) {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let count = []
    for (let i = 0; i < row; i++) {
        let temp = []
        for (let j = 0; j < col; j++) {
            let index = (Math.floor(Math.random() * 26));
            temp.push(alpha[index])
        }
        count.push(temp)
    }
    return count
}

// let board = [
//              ['A','X','C','Y'],
//              ['E','O','O','S'],
//              ['I','U','I','N'],
//              ['M','Y','O','E'],
//              ['P','D','A','I']
//             ]
            
let randomAlphabet = function (board) {
    const alpha = 'AIUEO'
    let count = 0
    for (let i = 0; i < board.length-1; i++) {
        for (let j = 0; j < board[i].length - 1; j++) {
            count = 0
            for (let k = 0; k < alpha.length; k++) {
                if(board[i][j] == alpha[k] || board[i][j+1] == alpha[k] || board[i+1][i] == alpha[k] || board[i+1][j+1] == alpha[k]) count++
            }
        }
    }
    return (count != 0 ? `You found ${count} Vowel` : `Vowel Not Found`)
}


let dataInBoard = generateBoard(3, 5)

console.log(dataInBoard)
console.log(randomAlphabet(dataInBoard))

