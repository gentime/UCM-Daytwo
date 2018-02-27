//adds two number
function sum(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var cal = document.getElementById('cal').innerHTML= parseFloat(num1) + parseInt(num2);
};
//subtracts two numbers
function subtraction(){
var num1 =document.getElementById('num1').value;
var num2 = document.getElementById('num2').value;
var cal = document.getElementById('cal').innerHTML = parseFloat(num1) - parseInt(num2);
};
//multiplys two numbers
function multi(){
    var num1 =document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var cal = document.getElementById('cal').innerHTML = parseFloat(num1) * parseInt(num2);

};
//divide 
function divi(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var cal = document.getElementById('cal').innerHTML = parseFloat(num1) / parseInt(num2);
}
    function alertcal(){
alert ( parseFloat('num1') + parseInt('num2'));
    };


   


