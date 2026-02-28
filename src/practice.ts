const list:(String|number)[]=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
list.push(10);
list.splice(2,1); // Remove the element at index 2 (Tuesday)
for(let i=0;i<list.length;i++){
    console.log(list[i])
}