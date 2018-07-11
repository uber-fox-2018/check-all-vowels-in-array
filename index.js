"use strict"

function checkVowelsInBoard(arr) {
    let result = 0;

    for(let i = 0; i < arr.length-1; i++) {
        for(let j = 0; j < arr[i].length-1; j++) {
            let str = arr[i][j] + arr[i][j+1] + arr[i+1][j] + arr[i+1][j+1];
            if(checkAllVowels(str))
                result++;
        }
    }

    return result;
}

function checkAllVowels(str) {
    str = str.toLowerCase();
    
    if(str.length === 0) 
        return false;

    for(let i = 0; i < str.length; i++) {
        if(!checkVowel(str[i]))  
            return false;
    }
    return true;
}

function checkVowel(c) {
    var vowels = ['a', 'i', 'u', 'e', 'o'];
    for(let i = 0; i < vowels.length; i++) {
        if(vowels[i] === c) return true;
    }
    return false;
}

function generateBoard(jumlahRow, jumlahCol) {
    var result = [];
    var row;
    for(let i = 0; i < jumlahRow; i++) {
        row = []
        for(let j = 0; j < jumlahCol; j++) {
            row.push(getRandomChar());
        }
        result.push(row);
    }
    return result;
}

function getRandomChar() {
    var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    return alphabets[getRandomInt(alphabets.length)]
}

function getRandomInt(rangeValue) {
    return Math.floor(Math.random() * Math.floor(rangeValue));
}

//Driver code
var board = [
    ['A', 'X', 'C', 'Y'],
    ['E', 'O', 'O', 'S'],
    ['I', 'U', 'I', 'N'],
    ['M', 'Y', 'O', 'E'],
    ['P', 'D', 'A', 'I'],
]
console.log('board:\n', board, '\nresult: ', checkVowelsInBoard(board));

var randBoard = generateBoard(10, 10);
console.log('random board:\n', randBoard, '\nresult: ', checkVowelsInBoard(randBoard));