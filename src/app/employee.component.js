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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
var Employee = (function () {
    function Employee(_http) {
        this._http = _http;
        this._url = "data/employeeData.list.json";
        this.path = "../../src/app/image/loader.gif";
    }
    Employee.prototype.getEmployee = function () {
        return this._http.get('https://www.w3schools.com/angular/customers_mysql.php')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
        console.log(path);
    };
    Employee.prototype.getPostData = function () {
        return this._http.get('https://jsonplaceholder.typicode.com/posts')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    Employee.prototype.getCommentData = function () {
        return this._http.get('https://jsonplaceholder.typicode.com/comments')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    return Employee;
}());
Employee = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=employee.component.js.map