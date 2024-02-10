const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.querySelector('body');
const imgs = document.querySelectorAll('img');

darkModeBtn.addEventListener('click', (e) => {
    if (e.target.checked) {
        body.style.filter = `invert(100)`;
        imgs.forEach((img) => {
            img.style.filter = `invert(100)`; 
        });
    } else {
        body.style.filter = `invert(0)`;
        imgs.forEach((img) => {
            img.style.filter = `invert(0)`; 
        });
    
    }

    if (!body.classList.contains('animate')) {
        body.classList.toggle('animate');
    } else {
        body.classList.remove('animate');
    }
    
    
});
