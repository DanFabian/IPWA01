
function setzeAbgabe(p){
    if (p==1) {
        sessionStorage.setItem(1,"Geschäftsstelle");
        sessionStorage.setItem(10,true);
    } else if (p==2) {
        sessionStorage.setItem(1,"Abholung");
    }
}

var Ziel;
function setzeOrt(p){
    if (p==1) {
    sessionStorage.setItem(2,"Syrien");
    } else if (p==2) {
   sessionStorage.setItem(2,"Yemen");
    } else if (p==3) {
    sessionStorage.setItem(2,"Ukraine");
    }
    
}

function setzeArt(p){
    if (p==1) {
    sessionStorage.setItem(3,"Kinderkleidung");
    } else if (p==2) {
   sessionStorage.setItem(3,"Männerkleidung");
    } else if (p==3) {
    sessionStorage.setItem(3,"Frauenkleidung");
    }
    
}


function speichern() {
    var key = document.getElementById('key').value;
    var data = document.getElementById('data').value;
    window.localStorage.setItem(key, data);
   }
   
   function lesen() {
    var key = document.getElementById('key').value;
    document.getElementById('data').value = window.localStorage.getItem(key);
   } 
    
function ausgabe(p) {
    document.getElementById("check").innerHTML = sessionStorage.getItem(p);
}

function zeigeadresse() {
    var x = document.getElementById('adresse');
    if (sessionStorage.getItem(10) == 'true') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
  } 