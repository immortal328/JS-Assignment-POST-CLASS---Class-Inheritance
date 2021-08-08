// import using require
var shape = require('./shape.js');
// declare class
module.exports = class Circle extends shape{
 constructor(...props){
  super(...props); 
 }
  calculateArea(){
    console.log("2*pi*r"); 
   return 10;
  }
}

// export class using module.exports
