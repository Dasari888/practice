function ReverseArray(arr:any[]):any[] {
    const arr1:any[]=[];
    for (let i=0;i<arr.length;i++){
     arr1.push(arr[arr.length-1-i]);
    }
    return arr1;
}


console.log(ReverseArray([1,2,3,4,5]));