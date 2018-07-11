function checkVowelsArray(row,col){
    let abjad = 'abcdefghijklmnopqrstuvwxyzaaaaaiiiiuuuuuuueeeeeooooooooo'
    let hasil = []

    for(let i = 0; i<row; i++){
        hasil.push([])
       
        for(let j = 0; j<col; j++){
            hasil[i].push(abjad[Math.floor(Math.random() * abjad.length)])
        }
    }
return hasil
}

function checkVowel(str) {

    let vocal = 'aiueo'

    for(let i = 0 ; i < vocal.length ; i++){
        for(let j = 0 ; j < str.length ; j++){

            if (str[j] === vocal[i]){
                return true
            } else {
                return false
            }
        }
    }
    // return false
}

function checker(){
    let cek = checkVowelsArray(row,col)
    let hasilCek = [];

    for(let i = 0; i<cek.length-1; i++){
        // console.log(i)
        for(let j=0; j<cek.length-2; j++){
            let vowelCek = ''
            vowelCek += hasil[i][j] + hasil[i][j+1] + hasil[i+1][j+1] + hasil[i+1][j]
            if(checkVowel(vowelCek)){
                hasilCek.push(vowelCek)
            }

        }

    }
    return hasilCek

}

// function checkBoard() {
//     let board = generateBoard(5,4)
//     let result = []
//     console.log(board);

//     for(let i=0; i<board.length-1; i++){
//         for(let j=0; j<board.length-2; j++){
//             let vowel = ''
//             vowel += board[i][j] + board[i][j+1] + board[i+1][j+1] + board[i+1][j]
//             if(checkVowel(vowel)){
//                 result.push(vowel)
//             }

//         }
//     }
//     return result
// }


console.log(checkVowelsArray(5,4))