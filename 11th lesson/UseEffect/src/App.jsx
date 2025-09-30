import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//   const tasks = [
//   {
//     id: 1,
//     title: "Купить продукты на неделю",
//     isDone: false,
//     addedAt: "1 сентября",
//     priority: 2,
//   },
//   {
//     id: 2,
//     title: "Полить цветы",
//     isDone: true,
//     addedAt: "2 сентября",
//     priority: 3,
//   },
//   {
//     id: 3,
//     title: "Сходить на тренировку",
//     isDone: false,
//     addedAt: "3 сентября",
//     priority: 1,
//   },
// ]
const [tasks, setTasks] = useState(null);
const [selectedId, setSelectedId] = useState(null);


  useEffect(() => {
    fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
      headers: {
        'api-key': '3163379c-5c41-4b1b-9b49-59f416c1a346'
      }
    }).then(res => res.json()).then(json => setTasks(json.data))
  }, [])



let newTask
  if(tasks != null){
 newTask = tasks.map((task) => {
  return (
  <>
  <div onClick={() => {alert(task.attributes.id); setSelectedId(task.data.id)}} style={{backgroundColor: task.attributes.priority===3? "orange": task.attributes.priority===2? "black":"none", border: task.attributes.id === selectedId? "5px solid blue":"none"}} key={task.attributes.id}>
  <h1 style={{textDecorationLine: task.attributes.status? "line-through":"none"}}>Заголовок: {task.attributes.title}</h1>
  <input type="checkbox" checked={task.attributes.status} />
  <p>Дата создания задачи: {new Date(task.attributes.addedAt).toLocaleDateString()}</p>
  </div>
  </>
)
}
)
} 



switch (tasks){
case null: 
  return(
      <>
      <h1>Загрузка</h1>
      </>
    )
case tasks.length === 0:
    return(
      <>
      <h1>Нет задач</h1>
      </>
    )
default:
  return (
    <>
    <button onClick={() => {setSelectedId(-5)}}>Сбросить выделение</button>
        {newTask}
    </>
  )
}
}


export default App
