const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 80 },
]
 
const productsWithFinalPrice = products.map((product) => {
    let discount = (product.price / 100) * 15
    return {
        name: product.name,
        price: product.price,
        discountPrice: product.price - discount
    }
})
console.log(productsWithFinalPrice)
// ⬇️ Итоговый результат
// [
//   { name: 'Laptop', price: 1000, finalPrice: 850 },
//   { name: 'Mouse', price: 50, finalPrice: 42.5 },
//   { name: 'Keyboard', price: 80, finalPrice: 68 }
// ]