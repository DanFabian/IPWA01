
var Ziel;
function setzeOrt(p){
    if (p=1) {
    var Ziel="Afrika";
    window.localStorage.setItem("1", "Afrioka");}
   // document.getElementById('check').innerHTML = Ziel;
    
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
    document.getElementById("check").innerHTML = "1";
}