const button_to_calculator = document.getElementById("button-to-calculator-dat");
const button_to_timer = document.getElementById("button-to-timer");
const calculator = document.getElementById("calculator-data");
const timer = document.getElementById("timer");

button_to_calculator.addEventListener("click", () => {
    button_to_calculator.style.display = "none";
    timer.style.display = "none";
    button_to_timer.style.display = "block";
    calculator.style.display = "block";
});

button_to_timer.addEventListener("click", () => {
    button_to_calculator.style.display = "block";
    timer.style.display = "block";
    button_to_timer.style.display = "none";
    calculator.style.display = "none";
});