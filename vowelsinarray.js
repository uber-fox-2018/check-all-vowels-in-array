function vowInArray(jumlahRow, jumlahCol) {
    var alf= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var vowels= 'AEIOU'
    var board= []
    var counter= 0


    // BUAT BOARD //
    for (var i=1; i<=jumlahRow; i++) {
        var grup= []

        for (var j=1; j<=jumlahCol; j++) {
            var idx= Math.floor(Math.random() * 26)         // returns a random integer from 0 to 25
            grup.push(alf[idx])
        }

        board.push(grup)
    }  
    console.log (board)

    //Untuk check test
    //var board= [['A', 'X ', 'C', 'Y'], ['E', 'O', 'O', 'S'], ['I', 'U', 'I', 'N'], ['M','Y', 'O', 'E'], ['P', 'D', 'A', 'I']]
    //console.log (board)


    // HITUNG VOWELS GROUP //
    var hasil= []
    var tmp=[]

    for (var i=0; i<board.length-1; i++) {
        
        for (var j=0; j<grup.length-1; j++) {

            var stone= board[i][j]
            var kanan= board[i][j+1]
            var bawah= board[i+1][j]
            var diagonal= board[i+1][j+1]

            if (vowels.indexOf(stone)!== -1 && vowels.indexOf(kanan)!== -1 && vowels.indexOf(bawah)!== -1 && vowels.indexOf(diagonal)!== -1) {
                tmp.push(stone,kanan,bawah,diagonal)
                hasil.push(tmp)   
                var tmp=[]
                counter++
            }                 
        }                                           
    }
    
    console.log ('Vowels Block count= '+ counter ) 
    return hasil
}

console.log (vowInArray(5,4))