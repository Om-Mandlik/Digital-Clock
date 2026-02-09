var time = document.getElementById("time")

function update_time(params) {
    var now = new Date();
    let hours = now.getHours().toString().padStart(2,0);
    let minutes = now.getMinutes().toString().padStart(2,0);
    let seconds = now.getSeconds().toString().padStart(2,0);

    const time_string = `${hours}:${minutes}:${seconds}`
    time.textContent = time_string
}
update_time()

setInterval(update_time , 1000)