function sum(){
    var num1 =  document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var cal = document.getElementById('calc').innerHTML = parseInt(num1) + parseInt(num2);
    alert(cal);
    console.log(sum);

}