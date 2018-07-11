
function generateRandom(possible) {
    var text = " ";
    var possible = "aiueobcd";

    for (var i = 0; i < 1; i++)
        text = possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

}



function generateNestedArr(jumlahRow, jumlahCol) {

    var board = [];
    var counter = 0
    for (let i = 0; i < jumlahRow; i++) {
        var arr = [];
        board.push(arr);

        for (let j = 0; j < jumlahCol; j++) {
            var randomStr = generateRandom()

            if (jumlahRow < jumlahCol) {
                arr.push(randomStr);
            } else {
                arr.push(randomStr);
            }

        }
    }

    for (let i = 0; i < board.length - 1; i++) {

        for (let j = 0; j < board[i].length - 1; j++) {

            if (board[i][j] === 'a' || board[i][j] === 'i' || board[i][j] === 'u' || board[i][j] === 'e' || board[i][j] === 'o') {

                if (board[i][j + 1] === 'a' || board[i][j + 1] === 'i' || board[i][j + 1] === 'u' || board[i][j + 1] === 'e' || board[i][j + 1] === 'o') {

                    if (board[i + 1][j] === 'a' || board[i + 1][j] === 'i' || board[i + 1][j] === 'u' || board[i + 1][j] === 'e' || board[i + 1][j] === 'o') {

                        if (board[i + 1][j + 1] === 'a' || board[i + 1][j + 1] === 'i' || board[i + 1][j + 1] === 'u' || board[i + 1][j + 1] === 'e' || board[i + 1][j + 1] === 'o') {

                            counter++

                        }
                    }

                }
            }
            // console.log(board[i + 1][j + 1])
        }
    }

    console.log(board)

    return `Ada ${counter} block yang berisi huruf vowel`
}

console.log(generateNestedArr(5, 5))
