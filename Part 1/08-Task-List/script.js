const enterButton = document.getElementById('enter')
const input = document.getElementById('user-input')
const ul = document.querySelector('ul')
const items = document.querySelectorAll('li')

function inputLength() {
    return input.value.length
}

function createListElement() {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ''

    //============== REFACTORING INSTRUCTOR'S CODE ==========================
    // Instructor Code - 1

    // function crossOut() {
    //     li.classList.toggle('done')
    // }
    // li.addEventListener('click', crossOut)

    // My Refactored Code - 1

    const crossOut = () => li.classList.toggle('done')
    li.onclick = () => crossOut()

    // Original Code --------------------------------------------------------
    const deleteBtn = document.createElement('button')
    deleteBtn.appendChild(document.createTextNode('X'))
    li.appendChild(deleteBtn)
    // ----------------------------------------------------------------------
    // Instructor Code - 2

    // deleteBtn.addEventListener('click', deleteListItem)
    
    // function deleteListItem() {
    //     li.classList.add('delete')
    //     setTimeout(() => {
    //         li.style.display = 'none'
    //     }, 500)
    // }
    
    // My Refactored Code - 2

    const deleteListItem = () => {
        li.classList.add('delete')
        setTimeout(() => {
            li.style.display = 'none'
        }, 500)
    }
    deleteBtn.addEventListener('click', deleteListItem)
}

//===================== END OF REFACTORING ===================================

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

// enterButton.addEventListener('click', addListAfterClick)
enterButton.onclick = () => addListAfterClick()

input.addEventListener('keypress', () => {
    if (inputLength() > 0 && event.which === 13) {
        createListElement()
    }
})