"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_component_1 = require("./employee.component");
var userList = (function () {
    function userList(_employeeService) {
        this._employeeService = _employeeService;
        this.employeeListdata = [];
    }
    userList.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployee().subscribe(function (resEmployee) { return _this.employeeListdata = resEmployee; }, function (resEmployeeError) { return _this.errormsg = resEmployeeError; });
    };
    return userList;
}());
userList = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "<h3>{{errormsg}}</h3><ul *ngFor = 'let employee of employeeListdata'><li>{{employee.id}} {{employee.name}} {{employee.gender}}</li></ul>",
    }),
    __metadata("design:paramtypes", [employee_component_1.Employee])
], userList);
exports.userList = userList;
//# sourceMappingURL=user.component.js.map