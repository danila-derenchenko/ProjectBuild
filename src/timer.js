import { renderTimer } from "./common.js";
import { start, stop } from "./check.js";

const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const turn_off_the_timer = document.getElementById("turn_off_the_timer");

let checkPause = false;
let checkReset = false;

pause.addEventListener("click", () => {
    if (checkPause === true) {
        checkPause = false;
    }

    else if (checkPause === false) {
        checkPause = true;
    }
});

reset.addEventListener("click", () => {
    checkReset = true;
});

turn_off_the_timer.addEventListener("click", () => {
    stop();
    turn_off_the_timer.style.display = "none";
    renderTimer([0, 0]);
});

function parseTime(time) {
    let array = time.split('');
    let minutes = array.slice(0, 2);
    let seconds = array.slice(3);
    let resultMinutes = minutes[0] + minutes[1];
    let resultSeconds = seconds[0] + seconds[1];
    return [+resultMinutes, +resultSeconds];
}

export function remainingTime(nowTime) {
    turn_off_the_timer.style.display = "none";
    let timeOver = false;
    let parse = parseTime(nowTime);
    renderTimer(parse);
    if (parse[0] == 0 && parse[1] == 1) {
        setTimeout(() => {
            start();
            turn_off_the_timer.style.display = "block";
            timeOver = true;
            document.getElementById("form-timer").style.display = "block";
            document.getElementById("pause_reset").style.display = "none";
            renderTimer(1);
        }, 1000);
    }

    else {
        let set_id = setInterval(() => {

            if (checkReset === true) {
                checkPause = false;
                checkReset = false;
                document.getElementById("form-timer").style.display = "block";
                document.getElementById("pause_reset").style.display = "none";
                document.querySelector("#timer_output").textContent = "";
                clearInterval(set_id);
            }


            else if (checkPause === true) {

            }

            else if (checkPause === false) {
                if (parse[1] != 0) {
                    parse[1] = parse[1] - 1;
                }

                else if (parse[1] == 0 && parse[0] > 0) {
                    parse[0] = parse[0] - 1;
                    parse[1] = 59;
                }

                renderTimer(parse);

                if (parse[0] == 0 && parse[1] == 1) {
                    setTimeout(() => {
                        start();
                        turn_off_the_timer.style.display = "block";
                        timeOver = true;
                        clearInterval(set_id);
                        document.getElementById("form-timer").style.display = "block";
                        document.getElementById("pause_reset").style.display = "none";
                        renderTimer(1);
                    }, 1000);
                }
            }

        }, 1000);
    }
}
