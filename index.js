function generateBoard(rows, cols) {
    let resultArr = []
    let alphabet = 'AIUEOTY'
    for(let i = 0; i < rows; i++) {
      let subArr = []
      for(let j = 0; j < cols; j++) {
        let random = Math.floor(Math.random() * ((alphabet.length-1) - 0 + 1));
        subArr.push(alphabet[random])
      }
      resultArr.push(subArr)
    }
    return resultArr
  }
  
  function checkAllVowels(char) {
    let toUpCase = char.toUpperCase()
    let vocals = 'AIUEO'
      if (vocals.indexOf(toUpCase) !== -1) {
        return true
      } else {
        return false
      }
  }
  
  function blockFilledVowels(board) {
    let resultArr = []
    for(let i = 0; i < board.length - 1; i++) {
      let subArr = []
      for(let j = 0; j < board[i].length - 1; j++) {
        if (checkAllVowels(board[i][j]) === true) {
          subArr.push(board[i][j])
          if (checkAllVowels(board[i][j+1]) === true) {
            subArr.push(board[i][j+1])
            if(checkAllVowels(board[i+1][j+1]) === true) {
              subArr.push(board[i+1][j+1])
              if(checkAllVowels(board[i+1][j]) === true) {
                subArr.push(board[i+1][j])
                resultArr.push(subArr)
              }
            }
          }
        }
      }
    }
    return resultArr
  }
  
  let board = generateBoard(2, 2)
  // console.log(board);
  console.log(blockFilledVowels(board));