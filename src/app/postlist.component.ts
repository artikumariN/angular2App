import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {Employee} from './employee.component'

@Component({
selector:"my-app",
templateUrl:"./postList.html",
})

export class postList{
    resPostdata: any = [];
    constructor(private _employeeService:Employee){}
    ngOnInit(){
             this._employeeService.getPostData().subscribe(resPost => this.resPostdata = resPost);
            
        }


}