const sum = (n) =>{ 
    let sum =0
    while(n>0){
    let digit =n%10;
    sum = sum+digit
    
    n=Math.floor(n/10)
}
return sum
}
console.log(sum(278));
console.log(sum(564));
console.log(sum(346));