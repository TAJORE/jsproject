<!DOCTYPE html>
<html>
<head>
<title>learn js!</title>
</head>
<body>
<p id="demo">1)JavaScript can change the style of an HTML element.</p>
<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click here to display!</button>

<p> see how JavaScript can change HTML attributes.</p>

<p>In this case JavaScript changes the  (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>
</body>
<script src="js_project.js"></script>
</html>