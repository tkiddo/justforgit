import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { MyFormComponent } from '../forms/my-form/my-form.component';
import {UserService} from '../services/user.service';
import { UserListComponent } from '../forms/user-list/user-list.component'
import {FormsComponent} from './forms.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MyFormComponent, UserListComponent,FormsComponent],
  providers:[UserService],
  exports:[FormsComponent]
})
export class MyFormsModule { }
