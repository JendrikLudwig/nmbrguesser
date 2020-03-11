nmbr = undefined;

let counter = 10;
let punkte = 100;
let totalPunkte = 0;

let x = 0;
let y = 0;
let z = 0;

let round = 1

let usedNmbr = [];
let usedNmbrDisplay ="";

let w0 = "";

let hintsHard = [];
let hintsMedium = [];
let hintsEasy = [];

function startGame(){
    nextRound();
    $("#StartScreen").css("display","none");
    $("#GameScreen").css("display","flex");
    $("#numberInput").focus();


}

function nextRound() {
  console.log("Neue Runde");   
  //Nummer Generieren
  nmbr = Math.floor(Math.random() * 100);
    
  //Tipps Generieren
  x = Math.floor(Math.random() * 3);
  y = Math.floor(Math.random() * 3);
  z = Math.floor(Math.random() * 3);

  //Variablen zurücksetzen
  counter = 10;
  punkte = 100;


  //Tipps platzieren
  setHints();


  //Counter auf Null setzen
  resetCounter();
  document.getElementById("currentRound").innerHTML = round;

}


function check() {
    let textinput = document.getElementById('numberInput').value;
    console.log(typeof(textinput));
    if((textinput.toString()[0])==0 && textinput.toString().length > 1){
        textinput=textinput[1];
    }
    console.log(usedNmbr.indexOf(textinput));
    console.log(textinput);
    console.log(usedNmbr);
    if (textinput == ""){
        gameAlert("Das Feld darf nicht Leer sein!","wrong");  
    }
    else if(usedNmbr.indexOf(textinput)>-1){
        
        gameAlert("Du hast diese Zahl bereits probiert!","wrong");
        document.getElementById('numberInput').value = "";
            
    }
    
    
    
    else {
        
        punkte = (counter)*(counter);
        counter--;
        toggleHints();
        
        $("#numberInput").val("");
        if (textinput == nmbr) {
            totalPunkte = (totalPunkte+punkte);
            punkte = 0;
            round++; 
            document.getElementById('points').innerHTML = totalPunkte;
            nextRoundAni(nmbr);
            nextRound();
        }

        else {
            document.getElementById('c'+counter).style.fill = '#3E3A3A';
            usedNumber(textinput);
            toggleanimation();
            //document.getElementById("falseNmbr").innerHTML = usedNmbr; !!SPÄTER ERGÄNZEN !!
        
            if (counter<=0) {
               
                //location.reload();
                gameOverAni(nmbr);
                 nmbr = undefined;

            }

         }
    
    }
}

function toggleHints() {


  if (counter == 9 ) {
      document.getElementById('hint1').innerHTML = hintsHard[x];
      $("#hint1").addClass("c");
      gameAlert("Neuer Tipp freigeschaltet!","right");
  }

  else if (counter == 6){
      document.getElementById('hint2').innerHTML = hintsMedium[y];
      $("#hint2").addClass("c");
      gameAlert("Neuer Tipp freigeschaltet!","right");
  }

  else if (counter == 3){
      document.getElementById('hint3').innerHTML = hintsEasy[z];
      $("#hint3").addClass("c");
      gameAlert("Neuer Tipp freigeschaltet!","right");
  }
}





function setHints() {
  hardHints(-1, Math.floor(Math.random() * nmbr));
  mediumHints();
  easyHints(0,0);

}

function hardHints(max_range, min_range) {
    console.log("DEBUG:RAnge Tipp gestartet");
    while ((max_range - min_range) < 25){
        console.log("Hauptschleife");
        console.log(max_range+"|"+min_range+"|"+nmbr);
        if ((max_range - min_range) < 25){
            console.log("Max Schleife davor");
            max_range = Math.floor(Math.random() * (100-nmbr) + nmbr);
            console.log("Max Schleife danach"+max_range);
        }
        if (((max_range - min_range) < 25)) {
            console.log("Min Schleife davor");
            min_range = Math.floor(Math.random() * nmbr);
            console.log("min Schleife danach");
        }
    }
  console.log("DEBUG:Range Tipp gesetzt"+min_range+"und"+max_range);
  console.log("DEBUG:Grüßer Kleiner gestartet");
  if (nmbr <= 50) {
    hintsHard[1] = "Die Zahl ist kleiner gleich 50!"
  }
  else {
    hintsHard[1] = "Die Zahl ist größer als 50!"
  }

  //(DEBUG) window.alert(`Bereich: ${min_range} - ${max_range}`);
  hintsHard[0] = "Die Zahl liegt zwischen "+min_range+" und "+max_range+"!";
  console.log("DEBUG:Grüßer Kleiner gesetzt");
    
  if(nmbr%2==0) {
      hintsHard[2] = "Die Zahl ist gerade"
  }
  else {
      hintsHard[2] = "Die Zahl ist ungerade" 
  } 

}


function mediumHints() {
    
    if(nmbr%5==0){
        hintsMedium[0] = "Die Zahl ist durch 5 teilbar";
    }
    else {
        hintsMedium[0] = "Die Zahl ist nicht durch 5 teilbar";
    }
    if(nmbr%3==0){
        hintsMedium[1] = "Die Zahl ist durch 3 teilbar";
    }
    else {
        hintsMedium[1] = "Die Zahl ist nicht durch 3 teilbar";
    }
    if(nmbr%7==0){
        hintsMedium[2] = "Die Zahl ist durch 7 teilbar";
    }
    else {
        hintsMedium[2] = "Die Zahl ist nicht durch 7 teilbar";
    }
    
}

function easyHints(quer, currentArray) {
    console.log("DEBUG:Quersumme gestartet");
    currentArray = nmbr.toString().split('');
    for(i=0;i<currentArray.length;i++){
        quer = quer + parseInt(currentArray[i], 10);
    }
    hintsEasy[0] = "Die Quersumme der Zahl ist "+quer;
    if (currentArray.length == 1) {
        hintsEasy[1] = ("Die gesuchte Zahl ist eine Ziffer");
    }
    else {
        hintsEasy[1] = ("Die Zahl ist im "+currentArray[0]+"0er Bereich");
    }
    
    hintsEasy[2] = "Die letzte Ziffer ist eine "+nmbr.toString().charAt(nmbr.toString().length-1);  

    //console.log(nmbr.charAt(nmbr.length-1));
    console.log("DEBUG:Quersumme gesetzt");
}

function resetCounter() {
    //Tipps entfernen
    $("#hint1").removeClass("c");
    $("#hint2").removeClass("c");
    $("#hint3").removeClass("c");
    $("#hint1").html("");
    $("#hint2").html("");
    $("#hint3").html("");
    $("#usedDisplay").html("");
    
    for(i=0; i<10; i++) {
        document.getElementById('c'+i).style.fill = '#F55656';
    }
    
    
    
    usedNmbr = [];
    usedNmbrDisplay ="";


}


//Darstellen der genutzten Zahlen

function usedNumber(x) {
    usedNmbr.push(x); //Genutze Zahl in ein Temporäres Array legen um später zu prüfen ob die zahl schon genutzt wurde
    let comb = "<span>"+x+"</span>&nbsp;" //Zusammenbasteln der Nummern mit dem HTML um sie darzustellen
    usedNmbrDisplay+=comb;
    console.log(usedNmbr);
    console.log(usedNmbrDisplay);
    $("#usedDisplay").html(usedNmbrDisplay);
    
}



//Wenn die Entertaste im Gamescreen gedrückt wird, passiert das gleiche als würde man den Check knopf drücken
$(document).bind('keyup', function(e){
    if(e.which==13 && nmbr !== undefined) {
      check();
    }
    if(document.getElementById('numberInput').value === "") {
      $("input").css("animation-name","input");
    }
    else if(document.getElementById('numberInput').value !== "") {
      $("input").css("animation-name","none");
    }

});


function mouseFocus() {
    $('#numberInput').focus();
}




