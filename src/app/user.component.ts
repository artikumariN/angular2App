import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {Employee} from './employee.component'

@Component({
selector:"my-app",
template:"<h3>{{errormsg}}</h3><ul *ngFor = 'let employee of employeeListdata'><li>{{employee.id}} {{employee.name}} {{employee.gender}}</li></ul>",
})

export class userList{
    employeeListdata: any = [];
     errormsg:string;
    constructor(private _employeeService:Employee){}
    ngOnInit(){
             this._employeeService.getEmployee().subscribe(resEmployee => this.employeeListdata = resEmployee, resEmployeeError =>this.errormsg = resEmployeeError);
    }


}