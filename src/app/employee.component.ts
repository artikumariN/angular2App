
import { Injectable } from "@angular/core";
import { Http ,Response} from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';

@Injectable()
export class Employee{
    private _url:string = "data/employeeData.list.json";
    path:string  = "../../src/app/image/loader.gif" ;
    constructor(private _http:Http){}
    getEmployee(){
        return this._http.get('https://www.w3schools.com/angular/customers_mysql.php')
       .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
                         console.log(path);
 }    
    getPostData(){
        return this._http.get('https://jsonplaceholder.typicode.com/posts')
       .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    }    
    getCommentData(){
        return this._http.get('https://jsonplaceholder.typicode.com/comments')
       .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    }    
}