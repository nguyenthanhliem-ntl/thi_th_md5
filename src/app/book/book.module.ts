import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {CreateComponent} from './create/create.component';
import {DeleteComponent} from './delete/delete.component';
import {EditComponent} from './edit/edit.component';
import {ListComponent} from './list/list.component';
import {BookRoutingModule} from './book-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    DeleteComponent,
    EditComponent,
    ListComponent
  ],

  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
