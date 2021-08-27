import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapRoutingModule } from './bootstrap-routing.module';
import {AppComponent} from '../app.component';
import {BootstrapComponent} from './bootstrap.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BookModule} from '../book/book.module';


@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BookModule
  ]
})
export class BootstrapModule { }
