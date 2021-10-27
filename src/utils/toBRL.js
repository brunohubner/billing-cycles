export default function toBRL(number) {
    return `R$ ${number.toFixed(2).toString().replace(".", ",")}`
}