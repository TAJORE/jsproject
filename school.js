
function accueil() {
    var element = document.getElementById("changer-couleur-accueil");
    element.style.backgroundColor='#9ACD32';
}

function admission() {
    var element = document.getElementById("changer-couleur-admission");
    element.style.backgroundColor='#9ACD32';
}


function program() {
    var element = document.getElementById("changer-couleur-program");
    element.style.backgroundColor='#9ACD32';
}

function inscription() {
    var element = document.getElementById("changer-couleur-inscription");
    element.style.backgroundColor='#9ACD32';
}
function tuto() {
    var element = document.getElementById("changer-couleur-tuto");
    element.style.backgroundColor='#9ACD32';
}
 function tuto2(){
     var element = document.getElementById("changer-couleur-tuto2");
     element.style.backgroundColor= '#9ACD32';
 }
function tuto_oc(){
    var element = document.getElementById("changer-couleur-tuto-oc");
    element.style.backgroundColor= '#9ACD32';
}

function reset_bg_sauf_accueil(){
    var element = document.getElementById("changer-couleur-admission");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-program");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-inscription");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto2");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto-oc");
    element.style.backgroundColor='#333';
}

function reset_bg_sauf_admission() {
    var element = document.getElementById("changer-couleur-accueil");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-program");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-inscription");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto2");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto-oc");
    element.style.backgroundColor='#333';

}

function reset_bg_sauf_program() {

    var element = document.getElementById("changer-couleur-accueil");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-admission");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-inscription");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto2");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto-oc");
    element.style.backgroundColor='#333';

}

function reset_bg_sauf_inscription(){
    var element = document.getElementById("changer-couleur-accueil");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-admission");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-program");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto2");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto-oc");
    element.style.backgroundColor='#333';
}

function reset_bg_sauf_tuto(){
    var element = document.getElementById("changer-couleur-accueil");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-admission");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-program");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-inscription");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto2");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto-oc");
    element.style.backgroundColor='#333';
}

function reset_bg_sauf_tuto2(){
    var element = document.getElementById("changer-couleur-accueil");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-admission");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-program");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-inscription");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto-oc");
    element.style.backgroundColor='#333';
}

function reset_bg_sauf_tuto_oc(){
    var element = document.getElementById("changer-couleur-accueil");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-admission");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-program");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-inscription");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto");
    element.style.backgroundColor='#333';

    var element = document.getElementById("changer-couleur-tuto2");
    element.style.backgroundColor='#333';
}

    $(document).ready(function(){
        $('#slide1').parallax("center", 0, 0.1, true);
        $('#slide2').parallax("center", 900, 0.1, true);
        $('#slide3').parallax("center", 2900, 0.1, true);
    });
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 6000);
}
