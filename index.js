const tasks = [
  { title: "Buy food", isDone: false },
  { title: "Make a flower", isDone: true },
  { title: "Go to gym", isDone: false },
]


const rootEl = document.getElementById("root")
const headerEl = document.createElement("h1")
headerEl.append("Tasks List")
const ulEl = document.createElement("ul")


 rootEl.append(headerEl)


 tasks.forEach((task) => {
    const divEl = document.createElement("div")
    const liEl = document.createElement("li")
    liEl.append(task.title)
    const checbox = document.createElement("input")
    checbox.type = 'checkbox'
    checbox.checked = task.isDone

    divEl.append(liEl)
    divEl.append(checbox)

    ulEl.append(divEl)
 })

rootEl.append(ulEl)