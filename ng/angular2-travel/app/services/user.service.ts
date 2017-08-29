import {Injectable} from '@angular/core'
import {Users} from '../mock/user-data.mock'

@Injectable()
export class UserService{
    getUsers(){
        return Users;
    }
}