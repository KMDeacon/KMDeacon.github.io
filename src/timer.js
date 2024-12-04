window.onload = setTimer;
var refreshIntervalId;

function setTimer() {
    var countDownDate = Date.now() + (3 * 60000);
    document.body.style.backgroundColor = "red";
    // Update the count down every 1 second
    refreshIntervalId = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(refreshIntervalId);
            document.getElementById("timer").innerHTML = "Done";
            document.body.style.backgroundColor = "limegreen";
        }
    }, 1000);
}
function resetTimer() {
    clearInterval(refreshIntervalId);
    setTimer();
}

if (window.alt1) {
    alt1.identifyAppUrl("./appconfig.json");
}
else {
    //let addappurl = `alt1://addapp/${new URL("./appconfig.json", document.location.href).href}`;
    //output.insertAdjacentHTML("beforeend", `
    //	Alt1 not detected, click <a href='${addappurl}'>here</a> to add this app to Alt1
    //`);
}
