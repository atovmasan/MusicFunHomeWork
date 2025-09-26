const names = ["Alice", "Bob", "Charlie", "Diana"]
const nameInfo = names.map((name) => {
    return {
        name: name,
        lenght: name.length
    }
})
console.log(nameInfo)
// ⬇️ Итоговый результат
// [
//   { name: 'Alice', length: 5 },
//   { name: 'Bob', length: 3 },
//   { name: 'Charlie', length: 7 },
//   { name: 'Diana', length: 5 }
// ]