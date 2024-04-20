import mediaSimples  from "./Functions/mediaSimples.js"
import mediaPonderada from "./Functions/mediaPonderada.js"
import mediaMediana from "./Functions/mediaMediana.js"

console.log(mediaSimples(2, 6, 3, 7, 4))
console.log(mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }))
console.log(mediaMediana(mediaSimples, 15, 14, 8, 7, 3))