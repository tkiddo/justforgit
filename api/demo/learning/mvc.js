var Person = new Class();
Person.find = function(id) {
    return id;
}

var person = Person.find(3);
// console.log(person);


function Class() {

}

Array.prototype.name = 'array';
var arr = [1, 2, 3];
console.log(arr.name)