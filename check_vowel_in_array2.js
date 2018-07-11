function board(row, column) {
  let alph = 'AIUEOJH'
  let papan = [];
  for (let i = 0; i < row; i++) {
    let container = [];
    for (let j = 0; j < column; j++) {
      container.push(alph[Math.floor(alph.length * Math.random())]);
    }
    papan.push(container);
  }
  return papan;
}

function checkVowel(character) {
  // console.log(character)
  let vow = 'AIUEO';
  if (vow.indexOf(character) !== -1) {
    return true;
  } else {
    return false;
  }
}


function block(board) {
  let result = 'Ada ';
  let countBlock = 0;
  let container = '';
  let statement = '';
  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      if (checkVowel(board[i][j]) === true) {
        container += board[i][j] + ' ';
        if (checkVowel(board[i][j + 1]) === true) {
          container += board[i][j + 1] + ' ';
          if (checkVowel(board[i + 1][j + 1]) === true) {
            container += board[i + 1][j + 1] + ' ';
            if (checkVowel(board[i + 1][j]) === true) {
              countBlock += 1;
              container += board[i + 1][j] + ' ';
              statement += 'Block ' + countBlock + ' berisi ' + container;
              container = '';
            }
          } else {
            container = '';
          }
        } else {
          container = '';
        }
      }
    }
  }
  console.log(board);
  return result + countBlock + ' Blok, ' + statement;
}

console.log(block(board(5, 4)));

// console.log(board(5, 4))
