function generateBoard(row, col) {
    let board = []
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZAAAAAAAAAAIIIIIIIIUUUUUUUUUUUEEEEEEEEOOOOOOOOO'

    for(let i=0; i<row; i++){
        board.push([]);

        for(let j=0; j<col; j++){
            board[i].push(alpha[Math.floor(Math.random()*alpha.length)])
        }
    }
    
    return board
}

// console.log(generateBoard(5,4));

function checkVowel(str) {
    let vowel = 'AIUEO';
    let countVowel = 0;

    for(let i=0; i<vowel.length; i++){
        for(let j=0; j<str.length; j++){
            if(str[j] === vowel[i]){
                countVowel++
            }
        }
    }

    // return countVowel
    if(countVowel == str.length){
        return true
    }else{
        return false
    }
}

function checkBoard() {
    let board = generateBoard(5,4)
    let result = []
    console.log(board);

    for(let i=0; i<board.length-1; i++){
        for(let j=0; j<board.length-2; j++){
            let vowel = ''
            vowel += board[i][j] + board[i][j+1] + board[i+1][j+1] + board[i+1][j]
            if(checkVowel(vowel)){
                result.push(vowel)
            }

        }
    }
    return result
}

console.log(checkBoard());
