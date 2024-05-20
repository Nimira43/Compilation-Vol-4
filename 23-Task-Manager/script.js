const taskForm = document.querySelector('.task-form'),
    taskList = document.querySelector('.task-list')

let taskIndex = 1

taskForm.onsubmit = (e) => {
    e.preventDefault()
    const taskInput = document.querySelector('.task-input')
    const taskText = taskInput.value.trim()
    taskText !== "" && handleSubmit() 

    function handleSubmit() {
        const taskItem = document.createElement('li')
        taskItem.classList.add('task-item')
        taskItem.textContent = `${taskIndex}- ${taskText}`
        taskItem.onclick = (e) => e.target.classList.toggle('completed')
        taskList.appendChild(taskItem)
        taskIndex++
        taskInput.value = ""
    }
}

