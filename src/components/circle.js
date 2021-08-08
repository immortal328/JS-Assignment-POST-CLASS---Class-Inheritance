// import using require
var shape = require("./shape.js");
// declare class

class Circle extends shape{
  constructor(...args){
    super(...args);
  }
  const calculateArea = () =>{
    console.log("2*Pie*r");
    return 3;
  }
}


// export class using module.exports
module.exports Circle;
