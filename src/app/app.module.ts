import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './book/list/list.component';
import { EditComponent } from './book/edit/edit.component';
import { DeleteComponent } from './book/delete/delete.component';
import { CreateComponent } from './book/create/create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    DeleteComponent,
    CreateComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
