import * as a1lib from "@alt1/base";

import "./timer.html";
import "./appconfig.json";
import "./icon.png";

window.onload = setTimer;
var refreshIntervalId;

function setTimer() {
    var countDownDate = Date.now() + (0.1 * 60000);
    document.body.style.backgroundColor = "red";

    // Update the count down every 1 second
    refreshIntervalId = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000* 60* 60)) / (1000* 60));
    var seconds = Math.floor((distance % (1000* 60)) / 1000);

    document.getElementById("timer")!.innerHTML = minutes + "m "+ seconds + "s ";

    if(distance < 0) {
        clearInterval(refreshIntervalId);
        document.getElementById("timer")!.innerHTML = "Done";
        document.body.style.backgroundColor = "limegreen";
    }
    }, 1000);
}

function resetTimer() {
    clearInterval(refreshIntervalId);
    setTimer();
}

//check if we are running inside alt1 by checking if the alt1 global exists
if (window.alt1) {
	//tell alt1 about the app
	//this makes alt1 show the add app button when running inside the embedded browser
	//also updates app settings if they are changed
	alt1.identifyAppUrl("./appconfig.json");
} else {
	//let addappurl = `alt1://addapp/${new URL("./appconfig.json", document.location.href).href}`;
	//output.insertAdjacentHTML("beforeend", `
	//	Alt1 not detected, click <a href='${addappurl}'>here</a> to add this app to Alt1
	//`);
}
