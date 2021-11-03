//ELEMENTS
const demoEl = document.getElementById('demo');

function time(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if (hour < 10) {
        hour = '0' + hour;
    }
    
    if (minute < 10) {
        minute = '0' + minute;
    }
    
    if (second < 10) {
        second = '0' + second;
    }
    demoEl.textContent = `${hour}:${minute}:${second}`;
}

setInterval(time, 1000);