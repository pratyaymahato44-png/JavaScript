const marvel_heros=["thor",'ironman',"hulk"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const new_heros=marvel_heros.concat(dc_heros)
// console.log(new_heros)

const all_heros=[...marvel_heros,...dc_heros]
// console.log(all_heros)
const n1=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const n2=n1.flat(2)
// console.log(n2)

// console.log(Array.isArray("pratyay"))
// console.log(Array.from("pratyay"))
// console.log(Array.from({name: "pratyay"}))

let score1=100;
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))

