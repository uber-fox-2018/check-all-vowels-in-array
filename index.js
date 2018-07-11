const randomAbjad = (row, col) => {
  const abjad = 'abcefghijklmnopqrstuvwxyz'.toUpperCase()
  let mainBoard = []

  for (let i = 0; i < row; i++) {
    var isiBoard = []
    for (let j = 0; j < col; j++) {
      isiBoard.push(abjad.charAt(Math.floor(Math.random() * abjad.length)))
    }
    mainBoard.push(isiBoard)
  }
  return mainBoard
}

const checkVowel = (input) => {
  if (input === 'A' || input === 'I' || input === 'U' || input === 'E' || input === 'O') {
    return true
  }
}

const vowelInArray = () => {
  const board = randomAbjad(10, 10)
  /*const board = [
    ['A', 'X', 'C', 'Y'],
    ['E', 'O', 'O', 'S'],
    ['I', 'U', 'I', 'N'],
    ['M', 'Y', 'O', 'E'],
    ['P', 'D', 'A', 'I']
  ] tes case di Den*/  
  let count = 0
  let vowelArr = []
  console.log(board);
  

  for (let i = 0; i < board.length-1; i++) {
    for (let j = 0; j < board[i].length-1; j++) {

      const kiri = checkVowel(board[i][j])
      const kanan = checkVowel(board[i][j+1])
      const kiriBawah = checkVowel(board[i+1][j+1])
      const kananBawah = checkVowel(board[i+1][j])

      if(kiri && kanan && kananBawah && kiriBawah){
        count++
        console.log(`Block ${count} : ${[board[i][j], board[i][j+1], board[i+1][j], board[i+1][j+1]]}`);
      }
    }
  }

  console.log(`Total block: ${count}`)
  
}
vowelInArray()