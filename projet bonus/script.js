let startTime = Date.now();

function updateTimer() {
    let elapsed = Date.now() - startTime; 


    let hours = Math.floor(elapsed / 3600000); 
    let minutes = Math.floor((elapsed % 3600000) / 60000);
    let seconds = Math.floor((elapsed % 60000) / 1000); 


    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}
setInterval(updateTimer, 1000);
