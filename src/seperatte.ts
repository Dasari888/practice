function seper(s:String): Record<string, number>{
   const  map1: Record<string, number> = {};
    map1['upper']=0;
    map1['lowe']=0;

    for(let i=0;i<s.length;i++){
    if((s[i]>='A' )  && (s[i]<='Z')){
        map1["upper"]++;
    }
    else {map1["lowe"]++;}
    }

    return map1;
}
console.log("TypeScript file executed successfully");


console.log(seper("AabBcDDEF"))