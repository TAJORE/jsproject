
//1
function maFunction1(nom) {
    return " bonjour et bien venue à " + nom;
}

document.getElementById("affichage_nom").innerHTML=maFunction1("yaoundé");
//2
function formulaire_validation() {
    var x = document.forms["monFormulaire"]["nomformulaire"].value;
    if (x == "") {
        alert("le nom doit obligatoirement etre saisi");
        return false;
    }
}

//3

