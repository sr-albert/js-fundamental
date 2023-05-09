const countDownValue = 0;
const inputEl = document.getElementById("initial-countdown");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

if (countDownValue <= 0) {
    startBtn.disabled = true
}

stopBtn.addEventListener("click", stop);
startBtn.addEventListener("click", start);

inputEl.addEventListener("change", function (e) {
    console.log(e.target.value)
    if (e.target.value > 0) {
        startBtn.disabled = false;
    } else {
        startBtn.disabled = true;
    }
});



function start() {
    let counter = parseInt(countDownValue);

    setInterval(function () {
        if (counter > 0) {
            counter--;
            document.getElementById("countdown-value").innerHTML = counter;
        } else {
            clearInterval();
            alert("Countdown is over!")
            counter = 0;
        }
    });
}

function stop() {
    clearInterval();
}


// Listen event on input change
// If value is greater than 0, enable start button
// If value is less than 0, disable start button
