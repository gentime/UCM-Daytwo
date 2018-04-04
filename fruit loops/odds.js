var odds = function (num1, num2, neg)
{
    var answer = false;
    if(neg)
{
    if(num1<0 && num2<0){
        answer = true;
    }
}else{
    if (num1<0 || num2<0)
    answer = true;
}
}
console.log(answer);