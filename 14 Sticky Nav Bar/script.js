const navbarEl = document.querySelector('.navbar')
const bottomContainerEl = document.querySelector('.bottom-container')
const totalContainerEl = document.querySelector('.total-container')

window.addEventListener('scroll', () => {
    if (window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50) {
        navbarEl.classList.add('active')
        bottomContainerEl.classList.add('active')
        totalContainerEl.classList.add('active')
    } else {
        navbarEl.classList.remove('active')
        bottomContainerEl.classList.remove('active')
        totalContainerEl.classList.remove('active')
    }
})