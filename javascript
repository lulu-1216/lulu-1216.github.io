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
  
--------------------------------------------------

//creating a clock
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
} // this adds a zero before numbers 1 - 9 to keep it looking nice and even ie: 00:00:00

function displayClock() {
 const clock = document.getElementById("clock");

  setInterval(function () {
     var today = new Date();
     var hour = today.getHours();
     var min = today.getMinutes();
     var sec = today.getSeconds();
     min = checkTime(min);
     sec = checkTime(sec);
     clock.textContent = `${hour}:${min}:${sec}`;  //callback function
  }, 1000);
}
displayClock();

//          create html with -- <div class="container">
           <h1> Day 10 </h1>
           <h1 class="text-center" id="clock"></h1>
        <div>
-----------------------------------------------------------

