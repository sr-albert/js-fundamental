let counter = 0;

// Add button click event
document.getElementById("increment-btn").addEventListener("click", increment);
document.getElementById("decrement-btn").addEventListener("click", decrement);

function increment() {
    counter++
    document.getElementById("counter-value").innerHTML = counter;
}

function decrement() {
    if (counter > 0)
        counter--;
    else
        counter = 0;

    document.getElementById("counter-value").innerHTML = counter;
}