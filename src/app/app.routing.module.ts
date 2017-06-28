import {  NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { EmployeeList }  from './employee.list.component';
import { postList }  from './postlist.component';
import { Comment }  from './postlist.comment';
import { userList }  from './user.component';
import { Home }  from './home.component';

const routes:Routes=[
    {path:'comments', component:Comment},
    {path:'user', component:EmployeeList},
    {path:'home', component:Home},
    {path:'', component:Home},
    {path:'postList', component:postList}
];
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}
export const routingComponent = [EmployeeList, postList, Comment, userList, Home]; 