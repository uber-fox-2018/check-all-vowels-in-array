function generateBoard(rows,cols){
    let result = [];
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZAIUEOAIUEAOEIUAO'
    for(let i = 0; i<rows; i++){
        let row = [];
        result.push(row);
        for(let j = 0; j<cols; j++){
            let random = Math.random()*(alphabet.length -1);
            let randomAlpha = alphabet[Math.floor(random)];
            row.push(randomAlpha)
        }
    }
    return result
}


function checkVowel(word){
    let vowel = 'AIUEO';
    let result = false;
    for(let i = 0; i<vowel.length; i++){
        if(word === vowel[i]){
            result = true;
        }
    }
    return result
}

function checkBoard(row,col){
    let board = generateBoard(row,col);
    console.log(board)
    let vowel ='AIUEO'
    let result = []
    let vowelStr = ''
    for(let i = 0; i<board.length-1; i++){
        for(let j = 0; j<board[i].length-1; j++){
            let current = board[i][j];
            let right = board[i][j+1];
            let bottom = board[i+1][j];
            let bottomRight = board[i+1][j+1];
            if(checkVowel(current) && checkVowel(right) && checkVowel(bottom) && checkVowel(bottomRight)){
                vowelStr = current+right+bottom+bottomRight 
                result.push(vowelStr)
            }
        }
    }
    return result
}

// console.log(generateBoard(4,4))
// console.log(checkVowel('B'))
console.log(checkBoard(4,4))



