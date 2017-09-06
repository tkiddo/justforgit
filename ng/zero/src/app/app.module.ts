import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {appRouting} from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from '../app/login/login.component';
import { TodoComponent } from '../app/todo/todo.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo.data';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
