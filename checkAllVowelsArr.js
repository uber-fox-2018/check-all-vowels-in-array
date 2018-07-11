function generateBoard(row, col){
    let result = []
    let char = 'AAAAABCDEEEEEFGHIIIIIJKLMNOOOOOPQRSTUUUUUVWXYZ'
    for (let i = 0; i < row; i++){
        let inside = []
        for (let j = 0; j < col; j++){
            inside.push(char[Math.floor((Math.random() * char.length))])
        }
        result.push(inside)
    }
    return result
}

function checkVowels(str){
    let notVowels = 'bcdfghjklmnpqrstvwxyz'.toUpperCase()
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < notVowels.length; j++){
            if (str[i]===notVowels[j]){
                return false
            }
        }
    }
    return true
}



function checkBlockVowels(){
    let board = generateBoard(3,5)
    let result = []
    for (let i = 0; i < board.length-1; i++){
        for (let j = 0; j < board[i].length-1; j++){
            var block2x2 = ''
            block2x2+= board[i][j] + board[i][j+1] + board[i+1][j] + board[i+1][j+1]
            if (checkVowels(block2x2)){
                result.push(block2x2)
            }
        }
    }
    if (result.length > 0){
        return result.length+' block : ' + result
    } else {
        return 'block vowels tidak ditemukan'
    }
    
}

console.log(checkBlockVowels())