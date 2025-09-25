import './App.css'

function App() {
  const tasks = [
  { id: 1, title: "Купить продукты на неделю", isDone: false },
  { id: 2, title: "Полить цветы", isDone: true },
  { id: 3, title: "Сходить на тренировку", isDone: false },
]

  return (
    <>
     <div>
      <h1>Tasks List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.title}</p>
            <input type="checkbox" checked={task.isDone} />
          </li>
        ))}
      </ul>
      </div> 
    </>
  )
}

export default App
