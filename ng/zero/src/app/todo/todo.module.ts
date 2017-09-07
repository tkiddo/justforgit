import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'

import {TodoComponent} from './todo.component'
import {TodoHeaderComponent} from './todo-header/todo-header.component'
import {TodoFooterComponent} from './todo-footer/todo-footer.component'
import {TodoService} from './todo.service'

import {routing} from './todo.routes'

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations:[
        TodoComponent,
        TodoFooterComponent,
        TodoHeaderComponent
    ],
    providers:[{
        provide:'todoService',useClass:TodoService
    }]
})
export class TodoModule{}