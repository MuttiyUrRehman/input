
        // class car {
        //     construction(brand){
        //         this.brand=brand;
        //     }
        //     start(){
        //         return this.brand+' is starting...';
        //     }
        // }
        // const mycar =new car('toyota');
        // console.log(mycar.start());

import { add } from "./math.js";
console.log("fghfgh")
//   import{ add } form "./math";
//   console.log(add(2,4));


 console.log(add(5,6));


//  new class cat

class animals{
    constructor(name){
        this.name= name;
    }
}
class Cat extends animals{
    speak(){
        console.log(this.name+' meao');
    }
}
const cat = new Cat('meao');
cat.speak();

// boy class

class boy{
    constructor(name){
        this.name= name;
    }
}
class Muttiy extends boy{
    speak(){
        console.log(this.name+'urdu');
    }
}
const muttiy = new Muttiy('urdu');
MIDIConnectionEventuttiy.soeak();
