function fabb(n:number):number{
    if (n==0){return 0;}
    else if (n==1){return 1;}
    else{return fabb(n-2)+fabb(n-1);}


}
console.log(fabb(5));

