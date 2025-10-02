const colors = ["красный", "синий", "зелёный", "жёлтый", "фиолетовый"]
 
// 1. Найди цвета с четными индексами (0, 2, 4...)
const evenIndexColors = colors.filter((color, index) => index % 2 == 0);
console.log(evenIndexColors); 


// 2. Найди первый цвет, индекс которого больше 2
const colorAfterIndex2 = colors.find((color, index) => index > 2);
console.log(colorAfterIndex2); 