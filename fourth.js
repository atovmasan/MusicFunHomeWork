const employees = [
  { name: "Alice", salary: 50000, experience: 3 },
  { name: "Bob", salary: 60000, experience: 5 },
  { name: "Charlie", salary: 45000, experience: 2 },
]
 
const employeesWithTotal = employees.map((employer) => {
    let bonus = (employer.salary / 100) * (5 * employer.experience)
    return {
        name: employer.name,
        salary: employer.salary,
        discountPrice: employer.salary + bonus
    }
})
 
console.log(employeesWithTotal)
// ⬇️ Итоговый результат
// [
//   { name: 'Alice', salary: 50000, experience: 3, totalSalary: 57500 },
//   { name: 'Bob', salary: 60000, experience: 5, totalSalary: 75000 },
//   { name: 'Charlie', salary: 45000, experience: 2, totalSalary: 49500 }
// ]