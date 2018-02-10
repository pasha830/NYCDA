function Animal(name, legs, age, type, sound){
  this.name = name;
  this.legs = legs;
  this.age = age;
  this.type = type;
  this.sound = sound;
  this.makeSound = function(){
    return this.sound + " " + this.sound;
  }
}

//===============================================
Animal.prototype.owner = function(){
  if(this.type == "cat"){
    return `The owner of ${this.name} is Miss Cat Lover`;
  }else if(this.type == "dog"){
    return `The owner of ${this.name} is Mr. Doggy Lover`;
  }else{
      return "No owner found"
    }
}

//===============================================
var myCat = new Animal("Catty", 4, 10, "cat", "meow");
console.log(myCat.name);
console.log(myCat.makeSound());

//===============================================
function Dog(){
  this.breed = "";
  this.description = function(){
    return `${this.name} is a dog and it's of breed ${this.breed}`;
    }
Animal.apply(this, arguments);
  }
Dog.prototype = new Animal();

//===============================================
var myDog = new Dog("Jack", 4, 6, "dog", "woof");
myDog.breed = "GreyHound";
console.log(myDog.description());
console.log(myDog.owner());