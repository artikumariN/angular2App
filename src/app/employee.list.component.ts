import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {Employee} from './employee.component'

@Component({
selector:"employee-list",
templateUrl:"./userList.html",
})

export class EmployeeList{
    employeeListdata: any = [];
     errormsg:string;
    constructor(private _employeeService:Employee){}
    ngOnInit(){
             this._employeeService.getEmployee().subscribe(resEmployee => this.employeeListdata = resEmployee, resEmployeeError =>this.errormsg = resEmployeeError);
    }


}