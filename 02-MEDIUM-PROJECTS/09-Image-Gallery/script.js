const body = document.querySelector('body')
const imgs = document.querySelectorAll('.img')

let activeImg = 0;

setImgAsBackground()

function setImgAsBackground() {
    body.style.backgroundImage = imgs[activeImg].
        style.backgroundImage
}

function activeImgs() {
    imgs.forEach(function (img) {
        img.classList.remove('active')
        img.classList.remove('animateTransition')
    })
    imgs[activeImg].classList.add('active')
    imgs[activeImg].classList.add('animateTransition')
}

const arrowBtns = document.querySelectorAll('.arrow-btn')
arrowBtns.forEach((btn) => {
    btn.onclick = () => {
        if (btn.className == 'right-arrow') {
            activeImg++
            if (activeImg > imgs.length - 1) {
                activeImg = 0
            }
        } else {
            activeImg--
            if (activeImg < 0) {
                activeImg = imgs.length - 1
            }
        }
        setImgAsBackground()
        activeImgs()
    }
})

