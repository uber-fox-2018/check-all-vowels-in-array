const generateBoard = (rows, cols) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let mainBoard = [];
  for (let i = 0; i < rows; i++){
    let row = [];
    for (let i = 0; i < cols; i++){
      let indexRandom = Math.floor(Math.random() * alphabet.length)
      row.push(alphabet[indexRandom]);
    }
    mainBoard.push(row);
    }
  return mainBoard;
}

const checkAllVowels = (string) => {
  let allVowels = true;
  for (let i in string){
      if (string[i].toUpperCase() !== 'A' && 
      string[i].toUpperCase() !== 'I' && 
      string[i].toUpperCase() !== 'U' &&
      string[i].toUpperCase() !== 'E' &&
      string[i].toUpperCase() !== 'O'){
          allVowels = false;
      }

  }
  if (!allVowels){
      return false;
  }
  return true;
}

const checkAllVowelsInArray = (wordsArr) => {
  let allBoxes = [];

  for (let i = 0; i < wordsArr.length - 1; i++){
    for (let j = 0; j < wordsArr[0].length - 1; j++){
      let box = [];

      box.push(wordsArr[i][j]);
      box.push(wordsArr[i][j+1]);
      box.push(wordsArr[i+1][j]);
      box.push(wordsArr[i+1][j+1]);
      allBoxes.push(box);
    }
  }
  
  let boxVowels = [];
  for (let i in allBoxes){
    let str = allBoxes[i].join('');
  
    if (checkAllVowels(str)) {
      boxVowels.push([str])
    }
  }
  if (boxVowels.length > 0){
    console.log (boxVowels);
  } else {
    console.log (`Tidak ada block yang memiliki all vowels didalamnya`);
  }
}

// board that have all vowels block
let testBoard = [ [ 'H', 'X', 'F', 'G', 'U' ],
  [ 'S', 'D', 'L', 'V', 'U' ],
  [ 'O', 'E', 'S', 'N', 'P' ],
  [ 'O', 'U', 'W', 'U', 'I' ],
  [ 'L', 'D', 'X', 'E', 'A' ] ]

checkAllVowelsInArray(testBoard);

let newBoard = generateBoard (10,10);
checkAllVowelsInArray(newBoard);


