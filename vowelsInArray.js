var generateBoard = function (row,col){
	var word ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

	var board=[]
	for (var i = 0 ; i < row ; i++){
		var temp =[]
		for (var j = 0 ; j < col ; j++){
			var index=Math.floor(Math.random()*25)
			temp.push(word[index])
		}
		board.push(temp)
	}
	return board
}


function isVowel(str){
	var vocal ='AIUEO'
	for (var k = 0 ; k < vocal.length ; k++){
		if (vocal[k] === str){
			return true
		}
	}
	return false
}

function vowelsInArray(arr){
	var result = 0
	for (var i = 0 ; i < arr.length-1 ; i++){
		for (var j = 0 ; j < arr.length-1 ; j++){
			if (isVowel(arr[i][j])){
				if (isVowel(arr[i][j+1]) && isVowel(arr[i+1][j]) && isVowel(arr[i+1][j+1])){
					result++
				}
			}
		}
	}
	if (result !== 0){
		return result
	}else {
		return -1
	}
}

console.log(vowelsInArray(generateBoard(5,3)))

console.log(vowelsInArray([	['A','X','C','Y'],
						 	['E','O','O','S'],
						 	['I','U','I','N'],
						 	['M','Y','O','E'],
						 	['P','D','A','I']
						]))

console.log(vowelsInArray([	['A','X','X','X'],
						 	['X','A','X','X'],
						 	['X','X','A','X'],
						 	['X','X','X','A'],
						 	['X','X','X','X']
						]))

console.log(vowelsInArray([	['O','O','A','A'],
						 	['O','I','I','A'],
						 	['X','I','I','X'],
						 	['E','E','U','U'],
						 	['E','E','U','U']
						]))