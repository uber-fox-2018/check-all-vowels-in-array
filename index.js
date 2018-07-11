function generateBoard(rows,cols) {
    var childArr = []
    var mainArr = []
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // var contoh = 'AXCYEOOSIUINMYOEPDAI'
    // var count = 0
    for(var i = 0; i < rows; i++){
        for(var j = 0; j < cols;j++){
            // childArr.push(contoh[count])
            // count++
            childArr.push(alphabet[Math.floor(Math.random()*26)])
        }
        mainArr.push(childArr)
        childArr= []
    }

    return mainArr
}

function cek(input) {

    var vocals = 'AIUEO'
    if(vocals.indexOf(input) !== -1){
        return true
    }
    
}


function cekVowels(rows,cols) {

    count = 0
    var arr = generateBoard(rows,cols)
    console.log(arr);
    
    
    for(var i = 0; i < arr.length-1;i++){
        for(var j = 0; j < arr[i].length-1;j++){
            var atas = cek(arr[i][j])
            var atas_kanan = cek(arr[i][j+1])
            var bawah = cek(arr[i+1][j])
            var bawah_kanan = cek(arr[i+1][j+1])
            
            if(atas && atas_kanan && bawah && bawah_kanan){
                count++
            }
        }
    }
    return count

}




console.log(cekVowels(5,4));
