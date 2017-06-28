"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employee_list_component_1 = require("./employee.list.component");
var postlist_component_1 = require("./postlist.component");
var postlist_comment_1 = require("./postlist.comment");
var user_component_1 = require("./user.component");
var home_component_1 = require("./home.component");
var routes = [
    { path: 'comments', component: postlist_comment_1.Comment },
    { path: 'user', component: employee_list_component_1.EmployeeList },
    { path: 'home', component: home_component_1.Home },
    { path: '', component: home_component_1.Home },
    { path: 'postList', component: postlist_component_1.postList }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponent = [employee_list_component_1.EmployeeList, postlist_component_1.postList, postlist_comment_1.Comment, user_component_1.userList, home_component_1.Home];
//# sourceMappingURL=app.routing.module.js.map