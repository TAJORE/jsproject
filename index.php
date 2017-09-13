<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="school.css" />
</head>
<body>
  <div id="contenu">
    <ul>
    <li class="dropdown">
        <span href="" class="dropbtn" id="admission" onclick="changer_admission()">Admissions</span>
        <div class="dropdown-content">
            <a href="#">Level 1</a>
            <a href="#">Level 2</a>
            <a href="#">Level 3</a>
            <a href="#">Level 4</a>
            <a href="#">Level 5</a>
        </div>
    </li>
    <li class="dropdown">
        <span href="" class="dropbtn" class="dropbtn" id="program" onclick="changer_program()">Programs</span>
        <div class="dropdown-content">
            <a href="#">Level 1</a>
            <a href="#">Level 2</a>
            <a href="#">Level 3</a>
            <a href="#">Level 4</a>
            <a href="#">Level 5</a>
        </div>
    </li>
    <li class="dropdown">
        <span href="javascript:void(0)" class="dropbtn" class="dropbtn" id="inscript" onclick="changer_inscript()">Inscription</span>
        <div class="dropdown-content">
            <a href="#">Yaounde Campus</a>
            <a href="#">Douala Campus</a>
            <a href="#">Bafoussam Campus</a>
            <a href="#">Ebolowa Campus</a>
            <a href="#">Bafia Campus</a>
        </div>
    </li>
    <li class="dropdown">
        <span href="javascript:void(0)" class="dropbtn" class="dropbtn" id="tuto" onclick="changer_tuto()">Tutoriel JS </span>
        <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
    </li>
    </ul>
  </div>
</body>
<script src="school.js"></script>
</html>