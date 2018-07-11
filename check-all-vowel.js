function generateBoard(arr){
   
    var buffer = []
    var row = 1
    for(var i = 0; i < arr.length-1; i++){
        
        for(var j = 0; j < arr.length-1; j++){
            var temp = []
            
            if(arr[i][j] == 'A' || arr[i][j] == 'I' || arr[i][j] == 'U' || arr[i][j] == 'E' || arr[i][j] == 'O'){
                temp.push(arr[i][j])
            }
            if(arr[i][j+1] == 'A' || arr[i][j+1] == 'I' || arr[i][j+1] == 'U' || arr[i][j+1] == 'E' ||arr[i][j+1] == 'O'){
                temp.push(arr[i][j+1])
            }
            if(arr[i+1][j] == 'A' || arr[i+1][j] == 'I' || arr[i+1][j] == 'U' || arr[i+1][j] == 'E' ||arr[i+1][j] == 'O'){
                temp.push(arr[i+1][j])
            }
            if(arr[i+1][j+1] == 'A' || arr[i+1][j+1] == 'I' || arr[i+1][j+1] === 'U' || arr[i+1][j+1] == 'E' ||arr[i+1][j+1] == 'O'){
                temp.push(arr[i+1][j+1])
            }

            // console.log(temp)

            if(temp.length == 4){
                buffer.push('Baris ke ' + row + ' : ' +  temp)
                row++
            }

        } 

    }

    return buffer.join('\n')

}

console.log(generateBoard([ 
                            ['A','X','C','Y'],
                            ['E','O','O','S'],
                            ['I','U','I','N'],
                            ['M','Y','O','E'],
                            ['P','D','A','I'],
                          ]))