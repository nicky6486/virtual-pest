console.log ("The timer is working");

var banana = 0 ;
var showBananaText = document.getElementById("bananas")
function myFunction() {
    alert("A banana!");
    banana=banana + 1 ;
showBananaText.innerHTML = "You have " + banana.toString() + " banana(s)";
  }
