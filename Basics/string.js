const name = "Pratyay"  
const book=50

//console.log(name + book + " value")  //not a good practice
//console.log(`hello my name is ${name} and i heve ${book} books`)
const movie = new String("Avengers Endgame")
//console.log(movie.__proto__)
//console.log(movie.toUpperCase())
//console.log(movie)
// console.log(movie.charAt(2))
// console.log(movie.indexOf('e'))

const newString=movie.substring(0,4)
console.log(newString)
console.log(movie)

const anotherString=movie.slice(0,4)
console.log(anotherString)
console.log(movie)

const str="   pratyay    "
console.log(str)
console.log(str.trim())

const url="http://pratyay.com/pratyay%20mahato"
console.log(url.replace('%20','-'))
console.log(url.includes('gsfdu'))

