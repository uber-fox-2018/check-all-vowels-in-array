function generateBoards(rows, cols) {
  const board = [];
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for(let i = 0; i < rows; i++) {
    const alphaRandom = [];
    for(let j = 0; j < cols; j++) {
      const indexAlphaRandom = Math.floor(Math.random() * alpha.length);
      alphaRandom.push(alpha.charAt(indexAlphaRandom));
    }
    board.push(alphaRandom);
  }

  return board;

}

function getVowelsBlock(rows, cols) {
  // let board = generateBoards(rows, cols);
  
  // test case
  let board = [
    ['A', 'X', 'C', 'Y'],
    ['E', 'O', 'O', 'Y'],
    ['I', 'U', 'I', 'Y'],
    ['M', 'Y', 'O', 'E'],
    ['P', 'D', 'A', 'I'],
  ];

  const vowels = 'AEIOU';
  let getVowels = [];
  let amount = 0;
  for(let i = 0; i < board.length-1; i++) {
    for(let j = 0; j < board[i].length-1; j++) {
      const vowelUpLeft = vowels.indexOf(board[i][j]) !== -1;
      const vowelUpRight = vowels.indexOf(board[i][j+1]) !== -1;
      const vowelDownLeft = vowels.indexOf(board[i+1][j]) !== -1;
      const vowelDownRight = vowels.indexOf(board[i+1][j+1]) !== -1;
      if(vowelUpLeft && vowelUpRight && vowelUpLeft && vowelDownLeft === true){
        amount++;
      }
    }
  }
  
  return amount;

}

console.log(getVowelsBlock(5,4));