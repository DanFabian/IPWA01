
function setzeAbgabe(p){
    if (p==1) {
        sessionStorage.setItem(1,"Geschäftsstelle");
        document.getElementById("Ort").innerHTML = "Abgabe Geschäftsstelle";
        zeigeadresse();
    } else if (p==2) {
        sessionStorage.setItem(1,"Abholung");
        document.getElementById("Ort").innerHTML = "Abholung";
        zeigeadresse();
    }
}

var Ziel;
function setzeOrt(p){
    if (p==1) {
        sessionStorage.setItem(2,"Syrien");
        document.getElementById("Ziel").innerHTML = "Syrien";
    } else if (p==2) {
        sessionStorage.setItem(2,"Jemen");
        document.getElementById("Ziel").innerHTML = "Jemen";
    } else if (p==3) {
        sessionStorage.setItem(2,"Ukraine");
        document.getElementById("Ziel").innerHTML = "Ukraine";
    }
    
}

function setzeArt(p){
    if (p==1) {
        sessionStorage.setItem(3,"Kinderkleidung")
        document.getElementById("Kleidung").innerHTML = "Kinderkleidung";
    } else if (p==2) {
        sessionStorage.setItem(3,"Männerkleidung");
        document.getElementById("Kleidung").innerHTML = "Männerkleidung";
    } else if (p==3) {
        sessionStorage.setItem(3,"Frauenkleidung");
        document.getElementById("Kleidung").innerHTML = "Frauenkleidung";
    }
    
}

    
function ausgabe(p) {
    document.getElementById("check").innerHTML = sessionStorage.getItem(p);
}

function zeigeadresse() {
    var x = document.getElementById('adresse');
    if (sessionStorage.getItem(1) == "Geschäftsstelle") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

  function formularabsenden() {
    const x = document.forms["adresse"];
    let text = "";
    for (let i = 0; i < x.length ;i++) {
    text = x.elements[i].value;
    sessionStorage.setItem(i+10,text);
    }

  }