
var Ziel;
function setzeOrt(p){
    if (p=1) {
    var Ziel="Afrika";}
    document.getElementById('check').innerHTML = Ziel;
    window.localStorage.setItem(p, Ziel);
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
    var ausgabe = window.localStorage.getItem(1);
    document.getElementById('check').innerHTML = ausgabe;
}