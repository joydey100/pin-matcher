// function for calculator body

let padBody = document.getElementById(`typed-number`);
let showtype = document.getElementById("type-show");

padBody.addEventListener("click", function (e) {
  let newNumber = e.target.innerText;
  if (isNaN(newNumber)) {
    if (newNumber == "C") {
      showtype.value = "";
    } else if (newNumber == "<") {
      showtype.value = showtype.value.slice(0, -1);
    } else {
      return;
    }
  } else {
    let previousNum = showtype.value;
    showtype.value = previousNum + newNumber;
  }
});

// Generate Pin Function

function generatePin() {
  let pin = Math.round(Math.random() * 10000);
  let pinString = pin + "";
  let showPin = document.getElementById("show-pin");

  //   4 pin condition check
  if (pinString.length == 4) {
    showPin.value = pin;
  } else {
    generatePin();
  }
}

// Submit Fucntion

document.getElementById(`submit-btn`).addEventListener("click", function (e) {
  let generatePin = parseInt(document.getElementById("show-pin").value);
  let calcPin = parseInt(document.getElementById("type-show").value);
  let notifyFail = document.getElementById("notify-fail");
  let notifysuccess = document.getElementById("notify-success");

  if (generatePin == calcPin) {
    notifysuccess.style.display = "block";
    notifyFail.style.display = "none";
  } else {
    notifysuccess.style.display = "none";
    notifyFail.style.display = "block";
  }

  //   decrease show try
  let showTry = document.getElementById(`show-try`);
  let showTryValue = parseInt(showTry.innerText);

  showTryValue = showTryValue - 1;

  showTry.innerText = showTryValue;

  if (showTryValue == 0) {
    e.target.setAttribute("disabled", true);
    document.querySelector(".action-left").innerText = "Please Refresh!";
  }
});
