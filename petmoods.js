
console.log ("The javascript is working");
var images  = [
    
    "<img SRC= \"http://www.pages.drexel.edu/~jz499/cs164/lab8/images/pet/relaxed.png\" alt=\"pet1\"class =\"slider-house\"  style=\"width:180px;height:300px;\">",

    "<img SRC=\"http://www.pages.drexel.edu/~jz499/cs164/lab8/images/pet/friendly.jpg\" alt=\"pet2\"class =\"slider-house\" style=\"width:250px;height:300px;\">",

    "<img SRC=\"http://www.pages.drexel.edu/~jz499/cs164/lab8/images/pet/happy.jpg\" alt=\"pet3\"class =\"slider-house\"  style=\"width:225px;height:300px;\">",
               
    "<img SRC= \"http://www.pages.drexel.edu/~jz499/cs164/lab8/images/pet/surprised.png\" alt=\"pet4\"class =\"slider-house\"  style=\"width:255px;height:300px;\">",
    
    "<img SRC= \"http://www.pages.drexel.edu/~jz499/cs164/lab8/images/pet/crazy.jpg\" alt=\"pet5\"class =\"slider-house\"  style=\"width:225px;height:300px;\">",
               
    "<img SRC= \"http://www.pages.drexel.edu/~jz499/cs164/lab8/images/pet/shy.png\" alt=\"pet6\"class =\"slider-house\"  style=\"width:225px;height:300px;\">"
               
               ];

// buttons definitions 
var storyButton = document.getElementById("storyButton");
var giveBananaButton = document.getElementById("giveBananaButton");
var praiseButton = document.getElementById("praiseButton");
var singButton = document.getElementById("singButton");
var robBananaButton = document.getElementById("robBananaButton");
var giftButton = document.getElementById("giftButton");
var timer ; 


var showImageText = document.getElementById("pet")


var showBananaText = document.getElementById("bananas")

var changePet_relaxed = function (){
    clearTimeout(timer);
    document.getElementById("banana").play();
    console.log ("Change the pet's mood to relaxed.");
    showImageText.innerHTML = images[0];
   };

   var changePet_friendly = function (){
    clearTimeout(timer);
    document.getElementById("banana").play();
    console.log ("Change the pet's mood to friendly.");
    showImageText.innerHTML = images[1];
    if(Math.random <0.5)
    timer = setTimeout(changePet_relaxed, 10000);
  else timer = setTimeout(changePet_happy, 10000);
   };

  var changePet_happy = function (){
    clearTimeout(timer);
    document.getElementById("banana").play();
    console.log ("Change the pet's mood to happy.");
    showImageText.innerHTML = images[2];
showBananaText.innerHTML = "You have " + "0" + " banana(s)";
   };

    var changePet_surprised = function (){
      clearTimeout(timer);
    document.getElementById("banana").play();
    console.log ("Change the pet's mood to surprised.");
    showImageText.innerHTML = images[3];
       if(Math.random <0.5)
    timer = setTimeout(changePet_relaxed, 10000);
  else timer = setTimeout(changePet_happy, 10000);
   };

     var changePet_crazy= function (){
      clearTimeout(timer);
    document.getElementById("banana").play();
    console.log ("Change the pet's mood to crazy.");
    showImageText.innerHTML = images[4];
      if(Math.random <0.5)
    timer = setTimeout(changePet_relaxed, 10000);
  else timer = setTimeout(changePet_happy, 10000);
   };

    var changePet_shy= function (){
      clearTimeout(timer);
    document.getElementById("banana").play();
    console.log ("Change the pet's mood to shy.");
    showImageText.innerHTML = images[5];
     if(Math.random <0.5)
    timer =setTimeout(changePet_relaxed, 10000);
  else timer = setTimeout(changePet_happy, 10000);
   };



//
storyButton.onclick = changePet_relaxed;
giveBananaButton.onclick = changePet_friendly;
praiseButton.onclick = changePet_happy;
singButton.onclick = changePet_surprised;
robBananaButton.onclick = changePet_crazy;
giftButton.onclick = changePet_shy;





