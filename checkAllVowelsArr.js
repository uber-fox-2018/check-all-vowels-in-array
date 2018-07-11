function generateBoard(jumlahRow, jumlahCol){
    let result=[];
    for(let i=0;i<jumlahRow;i++){
        let box=[];
        for(let j=0;j<jumlahCol;j++){
            let ascii = Math.floor(Math.random() * 25) + 97;
            let letter=String.fromCharCode(ascii);
            box.push(letter.toUpperCase());
       }
       result.push(box);
       box=[];
    }
    return result;
}

function checkVowels(arr){
    var vowels="AIUEO";
    var recap=[];
    var pos=[];
    
    for(var i=0;i<arr.length;i++){
        for(var j=0; j<arr[i].length;j++){
            var letter = arr[i][j];
            for(var vowel of vowels){
                if(letter===vowel){
                    pos.push(j);
                    break;
                }
            }
        }
        recap.push(pos);
        pos=[]; 
    }
    var count=0;
    
    if(recap.length<=1){
        return 0;
    }

    for(var k=0;k<recap.length-1;k++){
        for(var l=0;l<recap[k].length-1;l++){
            if(recap[k].length>=2 && recap[k+1].length>=2 && (recap[k][l+1]-recap[k][l]===1)){
                if(recap[k+1].includes(recap[k][l]) && recap[k+1].includes(recap[k][l+1])){
                    count++;
                }
            }
        }
    }
    return count;
}

var arr=[
    ["A", "X", "C", "Y"],
    ["E", "O", "O", "S"],
    ["I", "U", "I", "N"],
    ["M", "Y", "O", "E"],
    ["P", "D", "A", "I"]
]
var arr1=[
  [ 'K', 'T', 'A', 'I' ],
  [ 'B', 'F', 'E', 'T' ],
  [ 'P', 'R', 'O', 'M' ],
  [ 'U', 'S', 'V', 'O' ],
  [ 'U', 'A', 'R', 'I' ] 
]
var arr2=[ 
  [ 'H', 'D', 'E', 'U' ],
  [ 'I', 'O', 'U', 'I' ],
  [ 'R', 'O', 'V', 'T' ],
  [ 'R', 'E', 'U', 'P' ],
  [ 'P', 'D', 'F', 'L' ] 
]
console.log(checkVowels(arr));//3
console.log(checkVowels(arr1));//0
console.log(checkVowels(arr2));//1
console.log(checkVowels(generateBoard(5, 4)));//random
