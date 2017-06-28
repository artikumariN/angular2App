import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Employee } from "./employee.component";

@Component({
  selector:"my-app",
  templateUrl:"./navigation.html",
  styles:['input.ng-invalid,textarea.ng-invalid{border-left:5px solid red;}input.ng-valid,textarea.ng-valid{border-left:5px solid green};'],
  providers:[Employee]
})
export class AppComponent  { 
  title = 'Form Template';
    
   
 }
