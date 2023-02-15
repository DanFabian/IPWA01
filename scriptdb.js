
var Ziel;
function setzeOrt(p){
    if (p==1) {
    sessionStorage.setItem(1,"Afrika");
    } else if (p==2) {
   sessionStorage.setItem(2,"Europa");
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