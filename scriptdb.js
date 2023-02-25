// Abgabeort wird gespeichert
function setzeAbgabe(p){
    if (p==1) {
        sessionStorage.setItem(1,"Geschäftsstelle");
        document.getElementById("Ort").innerHTML = "Abgabe Geschäftsstelle";
      
        checkinput();
    } else if (p==2) {
        sessionStorage.setItem(1,"Abholung");
        document.getElementById("Ort").innerHTML = "Abholung";
      
        checkinput();
    }
}

// Zielort wird gespeichert
function setzeOrt(p){
    if (p==1) {
        sessionStorage.setItem(2,"Syrien");
        document.getElementById("Ziel").innerHTML = "Syrien";
        checkinput();
    } else if (p==2) {
        sessionStorage.setItem(2,"Jemen");
        document.getElementById("Ziel").innerHTML = "Jemen";
        checkinput();
    } else if (p==3) {
        sessionStorage.setItem(2,"Ukraine");
        document.getElementById("Ziel").innerHTML = "Ukraine";
        checkinput();
    }
    
}


// Art der Kleidung wird gespeichert
function setzeArt(p){
    if (p==1) {
        sessionStorage.setItem(3,"Kinderkleidung")
        document.getElementById("Kleidung").innerHTML = "Kinderkleidung";
        checkinput();
    } else if (p==2) {
        sessionStorage.setItem(3,"Männerkleidung");
        document.getElementById("Kleidung").innerHTML = "Männerkleidung";
        checkinput();
    } else if (p==3) {
        sessionStorage.setItem(3,"Frauenkleidung");
        document.getElementById("Kleidung").innerHTML = "Frauenkleidung";
        checkinput();
    }
    
}

    
function ausgabe(p) {
    document.getElementById("check").innerHTML = sessionStorage.getItem(p);
}


  // Speicherung der Daten aus dem Adressformular
  function formularabsenden(p) {
        if(p == 1){
            const x = document.forms["adresse"];
            let text = "";
            for (let i = 1; i < x.length ;i++) {
            text = x.elements[i].value;
            sessionStorage.setItem(i+10,text);
        }
        }
        else if(p == 2){
            const x = document.forms["nurname"];
            let text = "";
            for (let i = 1; i < x.length ;i++) {
            text = x.elements[i].value;
            sessionStorage.setItem(i+10,text);
            }    
        }
    }


  // Überprüfung ob das Adressfeld sichtbar sein muss oder nicht. Wenn nicht dann ist nur die Eingabe für Namen und Email sichtbar
  function checkinput() {
    var x = document.getElementById('adresse');
    var y = document.getElementById('nurname');
    if (sessionStorage.getItem(1) != null && sessionStorage.getItem(2) != null && sessionStorage.getItem(3) != null && sessionStorage.getItem(1) != "Geschäftsstelle") {
        x.style.display = "inline";
        y.style.display = "none";
    } else if (sessionStorage.getItem(1) != null && sessionStorage.getItem(2) != null && sessionStorage.getItem(3) != null && sessionStorage.getItem(1) == "Geschäftsstelle") {
        x.style.display = "none";
        y.style.display = "inline";
    }
  }


  //Reset der Eingabedaten
  function Reset() {
    sessionStorage.clear();
  }
