function findArea(){
var length = document.getElementById('length').value;
//Take input value for length

var width = document.getElementById('width').value;
//Take input value for width

var area = length * width;

document.getElementById('area').innerHTML = "Area: " + area;

console.log(area);

}
