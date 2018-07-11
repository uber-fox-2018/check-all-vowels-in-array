function buatBoard(jumlahRow, jumlahCol) {
    const huruf = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
  
    let mainBoard = [];
    for (let i = 0; i < jumlahRow; i++){
      let row = [];
      for (let i = 0; i < jumlahCol; i++){
        let indexRandom = Math.ceil(Math.random() * huruf.length)
        row.push(huruf[indexRandom]);
      }
      mainBoard.push(row);
      }
    debugger;
    return mainBoard;
  }
  
  function checkAllVowels(str){
    var strLower = str.toLowerCase()
    var anyConsonantYet = false
    for (var i in strLower){
      if (strLower[i] !== 'a' && strLower[i] !== 'i' && strLower[i] !== 'u' && strLower[i] !== 'e' && strLower[i] !== 'o'){
        anyConsonantYet = true
      }
      debugger;
    }
  
    if (anyConsonantYet) return false;
    return true;
  }
  
  function checkAllVowelsInArray (array){
    var allBlock = []
      for (let i = 0; i < array.length - 1; i++){
        for (let j = 0; j < array[0].length - 1; j++){
          var block = []
          block.push(array[i][j])
          block.push(array[i][j+1])
          block.push(array[i+1][j])
          block.push(array[i+1][j+1])
          allBlock.push(block)
        }
      }
      debugger;
  
    var blockVowel = []
    for (let i in allBlock){
      var strBlock = ''
      for (let j in allBlock[i]){
        strBlock += allBlock[i][j]
      }
      if (checkAllVowels(strBlock)) {
        blockVowel.push([strBlock])
      }
    }
    return blockVowel
}
  
console.log(checkAllVowelsInArray(buatBoard(5,4)))
  