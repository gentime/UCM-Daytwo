//adds two number
function sum(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var cal = document.getElementById('cal').innerHTML= parseFloat(num1) + parseInt(num2);
    alert(cal);
}
//subtracts two numbers
function subtraction(){
var num1 =document.getElementById('num1').value;
var num2 = document.getElementById('num2').value;
var cal = document.getElementById('cal').innerHTML = parseFloat(num1) - parseInt(num2);
alert(cal);
};
//multiplys two numbers
function multi(){
    var num1 =document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var cal = document.getElementById('cal').innerHTML = parseFloat(num1) * parseInt(num2);
alert(cal);

};
//divide 
function divi(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var cal = document.getElementById('cal').innerHTML = parseFloat(num1) / parseInt(num2);
      alert(cal);
    
};

   