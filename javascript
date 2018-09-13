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

document.getElementById("cancel-timer").addEventListener("click", function() {
 cancelAlert();
});

//    create html with 2 buttons like this -- <div class="container">
          <h1> Day 10 </h1>
          <button id ="timer-start"> Start Timer </button>
          <button id="cancel-timer">X</button>
    </div> --    //
  
