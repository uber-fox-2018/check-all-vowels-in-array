function vowelInArray(p,l) {
    let res = []
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
  
    for (let i = 0; i < p; i++) {
      let temp = [  ]
      for (let j = 0; j < l; j++) {
        let random = Math.round(Math.random() * (25 - 0) + 0)
        temp.push(alpha[random])
      }
      res.push(temp)
    }
    return res
}

let arr = [ 
[ 'i', 'o', 'b', 'v' ],
[ 'e', 'a', 'i', 'i' ],
[ 'k', 'e', 'o', 'a' ],
[ 'k', 'y', 'm', 'r' ],
[ 'f', 'd', 'j', 'b' ] ]

function vowelSearcher(array) {
  let res = ""
  let counterBlock = 0
  let vowel = 'aiueo'

  for (let i = 0; i < array.length -1; i++) {
    for (let j = 0; j < array[0].length -1;j++) { 
      let step = 0                                  // untuk navigasi pengecekan spiral
      let nav = [j,i]                               // target navigasi pengecekan spiral
      let temp = []                                 // untuk menampung huruf vocal
      for (let k = 0; k < 1;) {                     // loop untuk melakukan pengecekan spiral
        let trigger = false                         // pemberitahu apabila ada hruf vokal
        for (let l = 0; l < vowel.length;l++) {     // loop pengecek huruf vocal
            if (array[nav[0]][nav[1]] === vowel[l]) { // kondisi pengecekan untuk huruf vokal
                step += 1                           // penambahan navigasi
                trigger = true                      // pemberitau apabila ada huruf vokal
                temp.push(array[nav[0]][nav[1]])      // pengumpul huruf vokal
            }
        }

        if (step === 4 || trigger === false) {      // kondisi untuk pemberhentian loop (step === 4 adalah apabila semua step spiral telah di lakukan)
          k++                                       // trigger === false, karna tidak ada ditemukan huruf vokal
        } else if (step === 1) {                    // step spiral ke kanan dri posisi sebelumnya
          nav[1] += 1
        } else if (step === 2) {                    // step spiral ke bawah dri posisi sebelumnya
          nav[0] += 1
        } else if  (step === 3) {                   // step spiral ke kiri dri posisi sebelumnya
          nav[1] -= 1
        } 
      }
      if (temp.length === 4) {  
        counterBlock++                              // kondisi apabila ada 4 huruf vokal yg telah di kumpulkan
        res += 'block '+counterBlock+' : '+temp.join(',')+'\n'
                                                    // maka langkah selanjutnya ada di masukin ke var `res`
      }
    }
  }
  if (counterBlock === 0) {
    return 'Block vowels tidak di temukan'
  } else {
    return res
  }
}

// console.log(vowelSearcher(vowelInArray(5,4))) // hoki bisa nemu
console.log(vowelSearcher(arr)) // tester