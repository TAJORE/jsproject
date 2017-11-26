//fonction utilisée pour désactivé les méssages d'érreurs

function deactivateTooltips(){
    var tooltips = document.querySelectorAll('.tooltip'),
        tooltipsLength = tooltips.length;

    for (var i = 0; i < tooltipsLength; i++){
        tooltips[i].style.display = 'none';
    }
}
//fonction qui identifie l'élément du formulaire sur lequel on travail

function getTooltip(elements){
    while (elements = elements.nextSibling){
        if (elements.className ==='tooltip'){
            return elements;
        }
    }
    return false;
}
//fonction qui tranforme les texte en majuscule

function ChangeCase(elem)
{
    elem.value = elem.value.toUpperCase();
}
function surligne(champ, erreur)
{
    if(erreur)
        champ.style.backgroundColor = "#fba";
    else
        champ.style.backgroundColor = "";
}

function verifPseudo(champ)

{

    if(champ.value.length < 2 || champ.value.length > 25)

    {

        surligne(champ, true);

        return false;

    }

    else

    {

        surligne(champ, false);

        return true;

    }
}
function verifAge(champ)

{

    var age = parseInt(champ.value);

    if(isNaN(age) || age < 15 || age > 111)

    {

        surligne(champ, true);

        return false;

    }

    else

    {

        surligne(champ, false);

        return true;

    }

}

function verifForm(f)
{
    var pseudoOk = verifPseudo(f.pseudo);
    var mailOk = verifMail(f.email);
    var ageOk = verifAge(f.age);

    if(pseudoOk && mailOk && ageOk)
        return true;
    else
    {
        alert("Veuillez remplir correctement tous les champs");
        return false;
    }
}
function verifMail(champ)
{
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(!regex.test(champ.value))
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}