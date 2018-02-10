function House(name, doors, windows){
  this.name = name;
  this.doors = doors;
  this.windows = windows;
  this.description = function(){
    return `${this.name} has ${this.doors} doors and ${this.windows} windows`
  }
}

//===============================================
var myHouse = new House("My house", 10, 15);
console.log(myHouse.name);
console.log(myHouse.description());

function Room(){
  this.tables = 7;
  this.roomDescription = function(){
    return `${this.name} has ${this.tables} tables`;
  }
  House.apply(this, arguments);
}
Room.prototype = new House();

//===============================================
var myRoom = new Room("My room", 2, 4);
console.log(myRoom.roomDescription());

myRoom.tables = 10;
console.log(myRoom.roomDescription());