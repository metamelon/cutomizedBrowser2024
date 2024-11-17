const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); 
setInterval(getClock, 1000);


clock.style.position = "absolute"; 
clock.style.top = "50px"; 
clock.style.left = "150px"; 
clock.style.color = 'lightgray';
clock.style.fontSize = '3.0rem';