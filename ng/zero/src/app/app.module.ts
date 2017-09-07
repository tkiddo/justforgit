import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {appRouting} from './app.routes';
import {HttpModule} from '@angular/http';
import {TodoModule} from './todo/todo.module'

import { AppComponent } from './app.component';
import { LoginComponent } from '../app/login/login.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo.data';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
