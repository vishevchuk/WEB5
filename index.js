const title = document.querySelector("h2");
const timerField = document.querySelector("b");

let countTimer = setInterval(() => {
    let timer = Math.floor(Date.now() / 1000) - 1672531200 + 7200;
    timerField.textContent = String(timer).slice(1);

    if (timer > -1) {
        title.textContent = "Happy New Year!!!";
        clearInterval(countTimer);
        timerField.textContent = "";
    }

   

}, 1000);

