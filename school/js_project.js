
var start = 'good afternoon ', name, end = ' !', result;
name = prompt('what is your name?');
result = start + name + end;
alert(result);


function myFunction(){
     document.getElementById("demo2").innerHTML=" this paragraph has change.";
}





function myFunction(p1, p2) {
    return p1 * p2;
}
document.getElementById("demo5").innerHTML = myFunction(4, 3);
