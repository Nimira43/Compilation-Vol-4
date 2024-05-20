const checkbox = document.getElementById('checkbox');
const submitBtn = document.querySelector('button[type=submit]');

checkbox.disabled = true;
submitBtn.disabled = true;

const elements = document.querySelectorAll('.element');
const selectColour = document.getElementById('select-colour');
//selectColour = document.querySelector('#select-colour');

elements.forEach(function (element) {
    const colour = getRandomColour();
    element.style.backgroundColor = colour;
    element.innerHTML = colour;
    selectColour.innerHTML = colour;
});

function getRandomColour() {
    const letter = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
        colour += letter[Math.floor(Math.random() * 16)];
    }
    return colour;
}

elements.forEach(function(element) {
    element.addEventListener('click', function() {
        if (element.innerHTML === selectColour.innerHTML) {
            alert("You are human!");
            checkbox.checked = true;
            submitBtn.disabled = false;
        } else {
            alert("INCORRECT!!! Please verify that you are human!!!");
            location.reload(true);
        }
    });
});