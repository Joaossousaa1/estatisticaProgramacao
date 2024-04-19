export default function mediaPonderada(...numbers) {
    const mult = numbers.map(num => {
        return num.n * num.p
    }).reduce((acc, val) => acc + val, 0)

    const sumWeight = numbers.reduce((acc, val) => acc + val.p, 0)
    
    return mult / sumWeight
}