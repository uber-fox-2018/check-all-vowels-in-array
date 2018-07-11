// generate board 
function generateBoard (row,col){
  var alphabet = 'abcdefghijklmnopqrstuvwrowcolz'
  var hasil = []
  for (var i=0 ; i < row ; i++){
    var tampung = []
    for (var j=0 ; j < col ; j++){
      tampung.push(alphabet[Math.floor(Math.random() * 26)])
    }
    hasil.push(tampung)
  }
  return hasil
  }
  
  // console.log(generateBoard(5,4))
  // console.log(generateBoard(3,6))
  // console.log(generateBoard(7,5))
  // console.log(generateBoard(3,8))
  // console.log(generateBoard(2,5))
  // console.log(generateBoard(5,6))
  function cekVowel (param){
    var vokal = 'AIUEO'
    var vokalBlock = []
    var vokalBlockCek = 0
    
    
    
    for (var i=0 ; i < param.length-1 ; i++){
      
      for (var j=0 ; j <param.length-1 ; j++){
        // untuk jalan mencari huruf vokal
        var tampung =[]
        if (param[i][j] == 'A' || param[i][j] == 'I' || param[i][j] == 'U' || param[i][j] == 'E' || param[i][j] == 'O'){
          cek +=1
          var vokal1 = param[i][j]
          // console.log('a')
        }
        // console.log(cek)
        if ((param[i][j+1] == 'A' || param[i][j+1] == 'I' || param[i][j+1] == 'U' || param[i][j+1] == 'E' || param[i][j+1] == 'O') && cek ==1){
          cek +=1
          var vokal2 = param[i][j+1]
          // console.log('a2 =====>')
        }
  
        if ((param[i+1][j+1] == 'A' || param[i+1][j+1] == 'I' || param[i+1][j+1] == 'U' || param[i+1][j+1] == 'E' || param[i+1][j+1] == 'O') && cek ==2){
          cek +=1
          var vokal3 = param[i+1][j+1]
        }
  
        if ((param[i+1][j] == 'A' || param[i+1][j] == 'I' || param[i+1][j] == 'U' || param[i+1][j] == 'E' || param[i+1][j] == 'O') && cek ==3){
          cek +=1
          var vokal4 = param[i+1][j]
        }
  
        if (cek == 4){
          tampung.push(vokal1)
          tampung.push(vokal2)
          tampung.push(vokal3)
          tampung.push(vokal4)
          vokalBlock.push(tampung)
          vokalBlockCek +=1
        }
        var cek = 0
      }
    
      
    }
    if (vokalBlockCek >=1){
      for (var i=1 ; i <= vokalBlock.length ; i++){
        console.log('block ke ' + i +' : '+ vokalBlock[i-1])
      }
    }
    else {
      return ' tidak ditemukan block vokal'
    }
  }
    var x = [ [ 'A', 'X', 'C', 'Y' ],
              [ 'E', 'O', 'O', 'S' ],
              [ 'I', 'U', 'I', 'N' ],
              [ 'M', 'Y', 'O', 'E' ],
              [ 'P', 'D', 'A', 'I' ] ]
    console.log(cekVowel(x))
    