import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component'
import {HomeComponent} from './home/home.component'

export const appRoutes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    }
]