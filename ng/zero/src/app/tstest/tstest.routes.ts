import {RouterModule,Routes} from '@angular/router'
import {TstestComponent} from './tstest.component'

export const routes:Routes = [
    {
        path:'tstest',
        component:TstestComponent
    }
]

export const routing = RouterModule.forChild(routes)