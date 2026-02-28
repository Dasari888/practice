class dog{
    name :String;
    breed:String;

    constructor (name:String,breed :String) {
     this.name=name;
     this.breed=breed;        
    }
    namebreed():void{
        console.log("name  is %s,breed  is %s",this.name,this.breed)
    }

}


class dogdetailmore extends dog{
 weight:number;
 constructor (name:String,breed :String,weight:number) {
   super(name,breed);
   this.weight=weight;        
    }
 weightdetails():void{
  console.log("name is %s,breed is %s, weight is %s",this.name,this.breed,this.weight);
     }
 }
 

 class doghealth extends dog{
 condition:String;
 constructor(name:String,breed:String,condition:String){
    super(name,breed);
    this.condition=condition;
 }
 healthcondition():String{
    return this.condition;
 }
 }


 class dogslocation extends doghealth{
 Addr:String;
 constructor(name:String,breed:String,condition:String,Addr:String){
    super(name,breed,condition);
    this.Addr=Addr;
 }
 locdetails():void{
    console.log("name is %s,breed is %s, location is %s, health conditon is %s",this.name,this.breed,this.Addr,this.condition)
 }
 }



 interface aa{
    meaa():void ;
    
 }

 interface bb{
    beaa():void;
    str:string;
 }

 class CCC implements aa,bb{
    str:string;
    meaa(){
        console.log("meaaa");
    }
    constructor(str:string){
        this.str=str;
    }
    beaa(){
        console.log("beaaa and mane is %s",this.str);
    }
 }



const dog1= new dog("Rabyy","tigerbre");
const dog2=new dogdetailmore("robbb",'booo',34);
const dog3=new doghealth("roobbb",'chinam',"Good");
const dog4=new dogslocation("qwer","asdf","Good","HYD");
dog1.namebreed();
dog2.namebreed();
dog2.weightdetails();
console.log(dog3.healthcondition());
dog4.locdetails();

const d55= new CCC("nnnnnnn");
d55.beaa();
