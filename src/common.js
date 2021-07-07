const message = document.querySelector(".message");
const timerOutput = document.querySelector("#timer_output");

export default function renderMessage(text) {
    message.textContent = text;
}

export function renderDates(result) {
    message.innerHTML = `
        <span>Годы: ${result.years}</span>
        <span>Месяцы: ${result.months}</span>
        <span>Дни: ${result.days}</span>
    `
}

export function renderTimer(time) {
    document.querySelector("#timer_output").textContent = `${time[0]} : ${time[1]}`;
    if (time == 1) {
        document.querySelector("#timer_output").textContent = "Время вышло";
    }
}
