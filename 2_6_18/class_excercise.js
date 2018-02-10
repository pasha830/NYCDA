function Animal(name, legs, home){
  this.name = name;
  this.legs = legs;
  this.home = home;
  this.description = function(){
    return `A ${this.name} has ${this.legs} legs and lives in ${this.home}`
  }
}

//===============================================
var myTiger = new Animal("tiger", 4, "land");
console.log(myTiger.description());

//===============================================
function Mammal(){
  this.bloodtype = "warm-blooded";
  this.mammalDescription = function(){
    return `A ${this.name} is ${this.bloodtype}`;
  }
  Animal.apply(this, arguments);
}
Mammal.prototype = new Animal();

//===============================================
var lizard = new Mammal("lizard", "warm-blooded");
console.log(lizard.mammalDescription());

//===============================================
function resident(name, state, city, street){
  this.name = name;
  this.state = state;
  this.city = city;
  this.street = street;
  this.myDescription = function(){
    return `${this.name} lives on ${this.street} Street, in ${this.city}, ${this.state}`
  }
}

//===============================================
var tania = new resident("Tania", "NJ", "Hoboken", "Marshall");
console.log(tania.myDescription());

//===============================================

function work(){
  this.job = "works";
  this.officeplace = "Manhattan";
  this.workDescription = function (){
    return `Tania lives in ${this.state} but she ${this.job} in ${this.officeplace}.`
  }
  resident.apply(this, arguments);
}
work.prototype = new resident();

//===============================================
var career = new work("works", "Manhattan");
console.log(career.workDescription());
