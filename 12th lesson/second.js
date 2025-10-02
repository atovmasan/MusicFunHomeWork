const students = [
  { name: "Анна", age: 19, grade: 7, course: 2 },
  { name: "Диана", age: 17, grade: 8, course: 1 },
  { name: "Виктория", age: 21, grade: 5, course: 3 },
  { name: "Григорий", age: 18, grade: 9, course: 2 },
  { name: "Борис", age: 20, grade: 4, course: 3 },
  { name: "Евгений", age: 16, grade: 6, course: 1 },
]


// Найди студентов 18+ лет
const adults = students.filter(students => students.age >= 18)
console.log(adults)


// Найди студентов с оценкой 8+
const excellentStudents = students.filter(students => students.grade >= 8)
console.log(excellentStudents)


// Найди студентов 2 курса
const secondCourse = students.filter(students => students.course = 2)
console.log(secondCourse)


// Найди взрослых студентов с оценкой выше 6
const adultGoodStudents = students.filter(students => students.age >= 18 & students.grade > 6) 
console.log(adultGoodStudents)

//Part B

// Найди студента по имени 'Виктория'
const victoria = students.find(students => students.name == "Виктория")
console.log(victoria)


// Найди первого студента с оценкой 8+
const firstExcellent = students.find(students => students.grade >= 8) 
console.log(firstExcellent)


// Попытайся найти студента младше 16 лет
const tooYoung = students.find(students => students.age < 16) 
console.log(tooYoung) // должно быть undefined