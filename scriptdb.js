
var Ziel;
function setzeOrt(p){
    if (p=1) {
    var Ziel="Afrika";
    window.localStorage.setItem(1, "Afrika");}
   // document.getElementById('check').innerHTML = Ziel;
   else if(p=2) {
    window.localStorage.setItem(2, "Europa");
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
    
function ausgabe() {
    document.getElementById("check").innerHTML = window.localStorage.getItem(p);
}