function sayHello(person:string){
    return 'Hello,'+person;

}

let user = 'xfadf';
let isDone:boolean = false;
let boo:boolean = true;
console.log(sayHello(user));

let myName:string = 'car';
let myAge:number = 24;
let secentence:string = `hello ${myName},age is ${myAge}`;
console.log(secentence);

let a:string = 'seven';
a = 'fasdf';
let b:any = 'fsdfe';
b = 2;
let c = 'sdf';
c = '3';

let union:string|number = 'sdfs';
union = 3;

interface Person{
    readonly id:number;//只读属性
    name:string;
    age:number;
    gender?:string;//可选属性
    [propName:string]:any;//任意属性
}

let liu:Person = {
    id:1,
    name:'liu',
    age:23,
    gender:'male',
    a:111
};

console.log(liu);



function sum(x:number,y:number):number{
    return x+y;
}

sum(1,2);

let sum2:(x:number,y:number)=>number=function(x:number,y:number){
    return x+y;
}

class Animal{
    public name;
    public constructor(name){
        this.name = name;
    }
}

let one = new Animal('kkal');
console.log(one.name);
one.name = 'fsdf';
console.log(one.name)