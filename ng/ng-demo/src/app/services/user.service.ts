export class UserService{
    private users = [];
    constructor(){
        this.users = [
            {name:'yres',age:1},
            {name:'fdsfs',age:3}
        ]
    }
    get getUsers(){
        return this.users
    }
}