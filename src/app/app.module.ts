import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { RouterModule }  from '@angular/router';
import { EmployeeList }  from './employee.list.component';
import { AppRoutingModule}  from './app.routing.module';
import { routingComponent}  from './app.routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, AppRoutingModule],
  declarations: [ AppComponent, EmployeeList, routingComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
