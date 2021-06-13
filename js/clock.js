
function getDate() {
    return new Date();
}
function changedTime(val) {
    return val < 10 ? `0${val}` : `${val}`;
} 

function getHour(date) {
    return changedTime(date.getHours());
}

function getMin(date) {
    return changedTime(date.getMinutes());
}

function getSec(date) {
    return changedTime(date.getSeconds());
}

function getClock() {
    const data = getDate();

    const time = `${getHour(data)}:${getMin(data)}:${getSec(data)}`;
    return time;
}

function patinTime() {
    const id = document.querySelector(".clock");
    id.innerHTML = getClock();
}

function startClock() {
    setInterval(patinTime,1000);
}

function initClock() {
    patinTime();
    startClock();
}

initClock();