function generateBoard(rows, cols) {
    let board = [];
    let alphabets = 'AEIOUXYZAEIOU';

    for (let i = 0; i < rows; i++) {
        let rows = [];
        for (let j = 0; j < cols; j++) {
            var random = (Math.floor(Math.random()* alphabets.length));
            rows.push(alphabets.charAt(random));
        }
        board.push(rows)
    }
    // console.log(board);
    return board;
}

function checkVowels(arr) {
    let boxCount = 0
    
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const checker = arr[i][j] + arr[i][j+1] + arr[i+1][j+1] + arr[i+1][j];
            if (checkBox(checker) === true) {
                boxCount += 1;
            }
        }
    }
    return boxCount;
    
}

function checkBox(checker) {
    let vowels = 'AEIOU';
    let vowelCount = 0;
    
    for (let i = 0; i < checker.length; i++) {
        // console.log(i)
        for (let j = 0; j < vowels.length; j++) {
            // console.log(j);
            if(checker[i] === vowels[j]) {
                var isVowels = true;
                j = vowels.length;
            } else {
                isVowels = false;
            }
        }
        if (isVowels === true) {
            vowelCount += 1;
        }
    }
    if(vowelCount === checker.length) {
        return true;
    } else {
        return false;
    }
}




var boardArr = generateBoard(5, 4);
console.log(boardArr);
console.log(checkVowels(boardArr));


