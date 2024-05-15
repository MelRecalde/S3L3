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
    const cardBtn = document.createElement("button")
    cardTask.innerText = newTask.task
    cardBtn.innerHTML = "DELETE"
    cardBtn.classList.add("button")
    card.append(cardTask, cardBtn)

    cardBtn.addEventListener("click", function () {
        let allDeleteButtons = document.querySelectorAll('.button')
        for (let i = 0; i < allDeleteButtons.length; i++) {
            allDeleteButtons[i].addEventListener('click', function () {
              this.parentNode.remove()
            })
          }
    })
    
    const toDo = document.getElementById("listTask")
    toDo.appendChild(card)

    taskInputField.value = ""
}
)