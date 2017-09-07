import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {TstestComponent} from './tstest.component'
import {routing} from './tstest.routes'

@NgModule({
    imports:[
        CommonModule,
        routing
    ],
    declarations:[
        TstestComponent
    ]
})

export class TstestModule{}