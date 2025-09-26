import { first } from "./first.js"

export function second() {
    console.log("Запущен второй файл")
    first()
}