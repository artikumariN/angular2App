import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {Employee} from './employee.component'

@Component({
selector:"employee-list",
templateUrl:"./comment.html",
})

export class Comment{
    postcommentData: any = [];
     errormsg:string;
    constructor(private _employeeService:Employee){}
    ngOnInit(){
             this._employeeService.getCommentData().subscribe(resComment => this.postcommentData = resComment, resEmployeeError =>this.errormsg = resEmployeeError);
    }


}