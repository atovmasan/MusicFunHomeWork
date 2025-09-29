import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const tasks = [
  {
    id: 1,
    title: "Купить продукты на неделю",
    isDone: false,
    addedAt: "1 сентября",
    priority: 2,
  },
  {
    id: 2,
    title: "Полить цветы",
    isDone: true,
    addedAt: "2 сентября",
    priority: 3,
  },
  {
    id: 3,
    title: "Сходить на тренировку",
    isDone: false,
    addedAt: "3 сентября",
    priority: 1,
  },
]
 
let newTask
  if(tasks != null){
 newTask = tasks.map((task) => {
  return (
  <>
  <div style={{backgroundColor: task.priority===3? "orange": task.priority===2? "black":"none"}} key={task.id}>
  <h1 style={{textDecorationLine: task.isDone? "line-through":"none"}}>Заголовок: {task.title}</h1>
  <input type="checkbox" checked={task.isDone} />
  <p>Дата создания задачи: {task.addedAt}</p>
  </div>
  </>
)
}
)
} 


  if (tasks === null) {
    return(
      <>
      <h1>Загрузка</h1>
      </>
    )
  }


 if (tasks.length === 0) {
    return(
      <>
      <h1>Нет задач</h1>
      </>
    )
  }

  return (
    <>
        {newTask}
    </>
  )
}


export default App
