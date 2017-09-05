import {Injectable} from '@angular/core'
import {MENU} from './mock-menu'

@Injectable()
export class MenuService {
    getMenu() {
        return MENU
    }
}