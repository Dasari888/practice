function subset(l1: any[], l2: any[], index: number): any[] {
    if (index === l2.length) {
        return [l1];
    }
    const left = subset(l1.concat(l2[index]), l2, index + 1);
    const right = subset(l1, l2, index + 1);
    // return left.concat(right);
    return [...left, ...right];
}

console.log(subset([], [1, 2, 3], 0));

function sum(l1:number,l2:number):number{
    return l1+l2;
}

console.log(sum(1,2));




function fabinocci(n:number):number[]{
    if(n===0) return [0];
    if(n===1) return [0,1];
    const arr:number[]=fabinocci(n-1);
    arr.push(arr[arr.length-1]+arr[arr.length-2]);
    return arr; 
}



console.log(fabinocci(10));