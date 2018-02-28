var isprime = funtion (n){
    if(n === 1 || n === 2){
        return true;
    
}
for(i=2; i<n; i++){
    if(n % i === 0){
        return false;
    }
    return true;
}

}
console.log(isprime(66));
