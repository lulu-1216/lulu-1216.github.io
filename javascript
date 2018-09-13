var timer;

function delayAlert() {
  timer = setTimeout(triggerAlert, 3000);
}

function triggerAlert() {
  alert("Timer Complete");
}

document.getElementById("timer-start").addEventListener("click", function () {
  delayAlert();
});
