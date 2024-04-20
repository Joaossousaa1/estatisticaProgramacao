export default function mediaMediana(mediaSimples, ...numbers) {
    if (numbers.length % 2 === 0) {
        let num = {a: (numbers.length / 2) - 1, b: numbers.length / 2}
        return mediaSimples(numbers[num.a], numbers[num.b])
    } else {
        while (numbers.length > 1) {
            numbers.pop()
            numbers.shift()
        }
        return numbers[0]
    }
}