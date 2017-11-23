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

    if(isNaN(age) || age < 5 || age > 111)

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

    var ageOk = verifAge(f.age);



    if(pseudoOk && ageOk)

        return true;

    else

    {

        alert("Veuillez remplir correctement tous les champs");

        return false;

    }

}