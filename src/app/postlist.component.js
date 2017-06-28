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
var postList = (function () {
    function postList(_employeeService) {
        this._employeeService = _employeeService;
        this.resPostdata = [];
    }
    postList.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getPostData().subscribe(function (resPost) { return _this.resPostdata = resPost; });
    };
    return postList;
}());
postList = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "./postList.html",
    }),
    __metadata("design:paramtypes", [employee_component_1.Employee])
], postList);
exports.postList = postList;
//# sourceMappingURL=postlist.component.js.map