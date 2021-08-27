import { NgModule } from '@angular/core';

import {AppComponent} from '../app.component';
import {BootstrapComponent} from './bootstrap.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BookModule} from '../book/book.module';
import {CommonModule} from '@angular/common';
import {BootstrapRoutingModule} from './bootstrap-routing.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BootstrapRoutingModule
  ]
})
export class BootstrapModule { }
