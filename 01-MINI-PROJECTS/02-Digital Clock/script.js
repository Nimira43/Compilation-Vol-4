window.addEventListener('DOMContentLoaded', showTime());

function showTime() {
    let date = new Date();

    // date.setTime(50000000);

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = 'AM';

    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = 'PM';
    }

    h = h < 10 ? (h = '0' + h) : h;
    m = m < 10 ? (m = '0' + m) : m;
    s = s < 10 ? (s = '0' + s) : s;
    const time = `${h}:${m}<small>.${s} ${session}</small>`;
   
    document.getElementById('display-clock').innerHTML = time;
    setTimeout(showTime, 1000);

    let bg;
    const userName = 'Nick';
    const user = document.getElementById('user');

    if (h < 6 && session === 'AM') {
        bg = `url(./img/pexels-drift-shutterbug-2085998.jpg)`;
        user.innerHTML = `Good night ${userName}`;
    } else if (h <= 11 && session === 'AM') {
        bg = `url(./img/day.jpg)`;
        user.innerHTML = `Good morning ${userName}`;
    } else if (h < 5 && session === 'PM') {
        bg = `url(./img/afternoon.jpg)`;
        user.innerHTML = `Good afternoon ${userName}`;
    } else if (h <= 11 && session === 'PM') {
        bg = `url(./img/evening.jpg)`;
        user.innerHTML = `Good evening ${userName}`;
    }

    const body = document.querySelector('body');
    body.style.background = `${bg} center/cover`;
}

document
    .querySelector('.focus-container input')
    .addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const focus = document.querySelector('.focus-container input');
            document
                .querySelector('.focus-container')
                .innerHTML =
                `<h6>Today: </h6><h1>${focus.value}</h1>`;
    }
});

// Old Code

// if (h < 10) {
//     h = "0" + h;
// }

// if (m < 10) {
//     m = "0" + m;
// }

// if (s < 10) {
//     s = "0" + s;
// }
// const time = h + ":" + m + ":" + s + " " + session;
// console.log(time)