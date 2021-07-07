import render, { renderDates } from "./common.js";
import { diffDates } from "./date.js";
import { remainingTime } from "./timer.js";

const form_date = document.getElementById("form-date");
const form_timer = document.getElementById("form-timer");


form_date.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const date1 = evt.target.elements.date1.value;
    const date2 = evt.target.elements.date2.value;

    if (!date1 || !date2) {
        render("Введите оба значения");
        return;
    }
    render("");
    const result = diffDates(date1, date2);
    renderDates(result);
});

form_timer.addEventListener("submit", (evt) => {
    evt.preventDefault();
    remainingTime(evt.target.elements.timer_input.value);
    form_timer.style.display = "none";
    document.getElementById("pause_reset").style.display = "block";
    evt.target.elements.timer_input.value = "";
});