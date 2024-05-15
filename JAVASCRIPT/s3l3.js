const form = document.getElementById("addTask")
// riferimento al form

form.addEventListener("submit", function (event) {
    event.preventDefault() // evito l'aggiornamento al submit

    const taskInputField = document.getElementById("task")
    // seleziono l'elemento input per poi ricavare il valore
    const newTask = {
        task: taskInputField.value
    }

    // creo un div e assegno una classe
    const card = document.createElement("div")
    card.classList.add("card")

    // creo un <span> e un <button>
    const cardTask = document.createElement("span")
    const cardBtn = document.createElement("button")
    cardTask.innerText = newTask.task // stampo quello che ho scritto
    cardBtn.innerHTML = "<ion-icon name='trash-bin'></ion-icon>"
    cardBtn.classList.add("button") // assegno la classe al button
    cardTask.classList.add("task")
    card.append(cardTask, cardBtn)
    // Inserisco gli elementi all'interno della card

    // creo un event attraverso una funzione per eliminare la card con il bottone
    cardBtn.addEventListener("click", function () {
        let allDeleteButtons = document.querySelectorAll('.button')
        for (let i = 0; i < allDeleteButtons.length; i++) {
            allDeleteButtons[i].addEventListener('click', function () {
                this.parentNode.remove()
            })
        }
    })

    cardTask.addEventListener("click", function () {
        let allTasks = document.querySelectorAll('.task')
        for (let i = 0; i < allTasks.length; i++) {
          allTasks[i].addEventListener('click', function () {
            this.classList.toggle('completed')
          })
        }
      })
/*
    cardTask.addEventListener('click', function() {
        cardTask.classList.toggle("checked-task");
    })
*/
    const toDo = document.getElementById("listTask")
    toDo.appendChild(card)
    // seleziono dove inserire le card create nella pagina

    taskInputField.value = "" // Ripulisco l'input

}
)