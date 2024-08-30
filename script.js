var number=[5,10,15,20,25,30];
function myFunction(num) {
return num * 10;
}
var newarray = number.map(myFunction);
document.getElementById("results").innerHTML = newarray;
