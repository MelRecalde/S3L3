const form = document.getElementById("addTask")
// 

form.addEventListener("submit", function (event) {
    event.preventDefault()
    const taskInputField = document.getElementById("task")

    const newTask = {
        task: taskInputField.value
    }

    const card = document.createElement("div")
    card.classList.add("card")

    const cardTask = document.createElement("p")
    cardTask.innerText = newTask.task
    card.append(cardTask)

    const toDo = document.getElementById("listTask")
    toDo.appendChild(card)

    taskInputField.value = ""
}
)