import {Component} from '@angular/core';
import {Fruit} from './class/fruit'
import {User} from './class/user'
import {User2} from './class/user2'
import {UserService} from './services/user.service'

/*
 * 别忘记了使用@前缀
 * 这里相当于组件视图
 */
@Component({
    selector: 'my-app',
    // template: `
    //     <p>my name is:{{username}}</p>
    //     <p>my age is:{{age}}</p>
    //     <p>my fruit is:{{fruit}}</p>
    // `
    templateUrl:'app/templates/app.template.html',
    providers:[
        UserService
    ]
})



/*
 * 导出这个组件,也就是一个类
 * 这里相当于组件控制器
 */
export class AppComponent {
    // username = 'dreamapple';
    // age = 22;
    // fruit = 'apple'
    username: string;
    age: number;
    fruit: string;
    fruitList:Fruit[];
    msg:string;
    showMsg:Function;
    users:User2[];
    constructor(private userService:UserService) {
        this.username = 'dreamapple';
        this.age = 22;
        this.fruit = 'apple';
        this.fruitList = [
            new Fruit('apple',20),
            new Fruit('orange', 30),
            new Fruit('pear', 40),
            new Fruit('banana', 50)
        ];
        this.msg = 'hello';
        this.showMsg=function(){
            alert(this.msg)
        }
        this.users = userService.getUsers()

    }

    input='';
    keyupHandler1(event:KeyboardEvent){
        this.input = (<HTMLInputElement>event.target).value;
    }

    item='';
    itemList=[];
    addItem(name){
        this.itemList.push({name:name,status:'not finished'})
    }
    removeItem(id){
        this.itemList.splice(id,1)
    }
    doneItem(id){
        this.itemList[id].status = 'done'
    }

    user = new User('dreamapple','sdfsf@qw.com','noting is bad','apple')
    get userInfo(){
        return JSON.stringify(this.user)
    }

    

}