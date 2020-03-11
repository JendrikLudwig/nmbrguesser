let selectorState = undefined; 

$('.alert').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove().css("box-shadow","none"); });

function toggle() {
  $( "#header" ).removeClass( "h_title" ).addClass( "h_active" );
  $( "#DIVstartScreen" ).css("display","none")

}

function startAni(){
    $("main").css({"filter":"blur(0.4rem)","opacity":"0.1","pointer-events":"none"});
    $("#alert").css("display","flex").hide().delay(0).fadeIn();
    $("#alertDiv").css("display","flex").hide().delay(0).fadeIn();
    $("#mainMessage").css("display","flex").hide().delay(0).fadeIn();
    $("#secondMessage").css("display","flex").hide().delay(500).fadeIn();
    $("#buttonMessage").css("display","flex").hide().delay(1000).fadeIn();
}
            
            
function closeAni(){
    $("#alert").fadeOut();
    $("#alertDiv").fadeOut();
    $("#mainMessage").fadeOut();
    $("#secondMessage").fadeOut();
    $("#buttonMessage").fadeOut();
    $("main").css({"filter":"blur(0)","opacity":"1","pointer-events":"all"});
}
    

function nextRoundAni(x) {
    document.getElementById("mainMessage").innerHTML = "RICHTIG!";
    $("#mainMessage").css({"color":"#49ffce","text-shadow":"0 0 1rem #49ffce"});
    document.getElementById("secondMessage").innerHTML = "Du&nbsp;hast&nbsp;die&nbsp;Zahl&nbsp;"+x+"&nbsp;gefunden!";
    document.getElementById("buttonMessage").innerHTML = "<p onclick='nextRound()'>Nächste Runde</p>";
    startAni();
}
  
function gameOverAni(x) {
    document.getElementById("mainMessage").innerHTML = "GAME&nbsp;OVER!";
    $("#mainMessage").css({"color":"#F55656","text-shadow":"0 0 1rem #F55656"});
    document.getElementById("secondMessage").innerHTML =  "Du&nbsp;hast&nbsp;die&nbsp;Zahl&nbsp;"+x+"&nbsp;nicht&nbsp;gefunden!";
    document.getElementById("buttonMessage").innerHTML = "<p onclick="+'"'+"window.open('index.html','_self')"+'"'+">Hauptmenü</p>";
    startAni(); 

}  





function toggleanimation() {
    $("#flasher").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
    }).addClass("active");
}


function gameAlert(msg, state) {
    if(state == "right") {
        $("#notificationFrame").append("<div class='alertBox'><img src='img/check_icon.png' class='alertIcon'>"+msg+"</div>");    
    }
    else if(state == "wrong") {
        $("#notificationFrame").append("<div class='alertBox'><img src='img/wrong_icon.png' class='alertIcon'>"+msg+"</div>");
    }
    else {
        $("#notificationFrame").append("<div class='alertBox'><img src='img/wrong_icon.png' class='alertIcon'>"+msg+"</div>");
    }
} 

//Schalten zwischen den Beschreibungsseiten

let descPage = 1;
function nextDesc() {
    $('#desc'+descPage++).css("display","none");
    console.log(descPage);
    $('#desc'+descPage).css("display","flex");
    
}



function selector(x) {
    
    
    if (selectorState == undefined){}
    else {
        $("#s"+selectorState).removeClass("active");
    }
    $("#s"+x).addClass("active");
    selectorState = x;
    
}


      

    

    
