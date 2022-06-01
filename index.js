var drumButtons=document.getElementsByClassName("drum");

for (var i = 0; i <drumButtons.length ; i++) {
  drumButtons[i].addEventListener("click",function (){

    this.style.color="#557B83";  //'this' means identity of given object (in this case when user clicks some button get it's object).

    var btnLetter=this.innerHTML;  //'this' means identity of given object (in this case when user clicks some button get it's object and then get object's HTML value).

    soundGenerate(btnLetter);
    btnAnimation(btnLetter);
  });
}


document.addEventListener("keypress", function (event){
  var keyPress=event.key; //this gives key value what enterd (ex:- w,s,a like wise).

  soundGenerate(keyPress);
  btnAnimation(keyPress);
});


function soundGenerate(letter){
  var sound;
  switch (letter) {  //letter=true, that means executing bellow code.
    case "w":
      sound=new Audio("sounds/tom-1.mp3");
      sound.play();
      break;

    case "a":
        sound=new Audio("sounds/tom-2.mp3");
        sound.play();
        break;

    case "s":
         sound=new Audio("sounds/tom-3.mp3");
         sound.play();
         break;

    case "d":
          sound=new Audio("sounds/tom-4.mp3");
          sound.play();
          break;

    case "j":
          sound=new Audio("sounds/snare.mp3");
          sound.play();
          break;

    case "k":
          sound=new Audio("sounds/crash.mp3");
          sound.play();
          break;

    case "l":
          sound=new Audio("sounds/kick-bass.mp3");
          sound.play();
          break;

    default:
    console.log("Not played any sound");

  }
}

function btnAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function (){
    activeButton.classList.remove("pressed");
  },100);
}
