// declare class

class Shape{
    constructor(color){
       this.color=color===undefined?"blue":color;
    }
  
  drawShape(){
    console.log("draw the shape"); 
  }
  calculateArea(){
   console.log("area is area"); 
      return 1;
  }
}
// export class using module.exports
module.exports Shape;
