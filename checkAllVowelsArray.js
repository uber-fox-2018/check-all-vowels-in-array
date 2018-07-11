/*
Kamu diminta untuk membuat program yang berfungsi untuk mencari sekelompok string yang isinya berupa hanya huruf vokal pada array 2 dimensi dengan ukuran 5x3. Adapun ukuran kelompok string yang dicari merupakan sub-array berukuran 2x2 dari array yang diberikan. Tugas kamu adalah mencari tahu berapa banyak blok berukuran 2x2 yang ditemukan

Buatlah sebuah function yang dapat menerima 2 input integer berupa jumlah row dan jumlah column, setelah itu men-generate array 2 dimensi dengan jumlah row dan column sesuai yang di-input dan berisi random alphabet.

contoh : jumlah row:5, jumlah col:4
outputnya :
[
    [ 'A', 'X', 'C', 'Y' ],
    [ 'E', 'O', 'O', 'S' ],
    [ 'I', 'U', 'I', 'N' ],
    [ 'M', 'T', 'O', 'E' ],
    [ 'P', 'D', 'A', 'I']
]
*/

function checkAllVowelsArray(jumlahRow,jumlahCol){
    var alphabet = 'AIUEOABCDEFGHIJKLMOPQRSTUVWXYZAIUEOAIUEO'
    var vokal = 'AIUEO'
    var result = []


    for(var i = 0 ; i < jumlahRow ; i++){
        var arr = []
        for(var j = 0 ; j < jumlahCol ; j++){
            var random = Math.floor(Math.random() * alphabet.length)
            arr.push(alphabet[random])
        }
        result.push(arr)
    }
    console.log(result)
    // ====================================================================
    var res = []
    
    

    for(var i = 0 ; i < result.length-1 ; i++){
        
        var arr = []
        
        for(var j = 0 ; j < result.length-1 ; j++){
            var turns = 0
            // var stone= result[i][j]
            // var kanan= result[i][j+1]
            // var bawah= result[i+1][j]
            // var diagonal= result[i+1][j+1]
            
            if(result[i][j] === 'A' || result[i][j] === 'I' || result[i][j] === 'U' || result[i][j] === 'E' || result[i][j] === 'O'){
                turns++
                arr.push(result[i][j])
            }
            if((result[i][j+1] === 'A' || result[i][j+1] === 'I' || result[i][j+1] === 'U' || result[i][j+1] === 'E' || result[i][j+1] === 'O') && turns === 1){
                arr.push(result[i][j+1])
                turns++
            }
            if((result[i+1][j] === 'A' || result[i+1][j] === 'I' || result[i+1][j] === 'U' || result[i+1][j] === 'E' || result[i+1][j] === 'O') && turns === 2){
                arr.push(result[i+1][j])
                turns++
            }
            if((result[i+1][j+1] === 'A' || result[i+1][j+1] === 'I' || result[i+1][j+1] === 'U' || result[i+1][j+1] === 'E' || result[i+1][j+1] === 'O') && turns === 3){
                arr.push(result[i+1][j+1])
                turns++
            }

            if (turns === 4){
                res.push(arr)
                arr=[]
            }
            
        }
    }
    if(!res[0]){
        return 'tidak ada'
    }
    console.log('dari array yang di atas, vowels 2x2 memiliki ' + res.length + ' blok yaitu :')
    return res
}


console.log(checkAllVowelsArray(5,4))


/*
memiliki 3 blok : [ [E,O,I,U],[O,O,U,I],[O,E,A,I] ]
*/
