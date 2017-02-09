import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { IUser } from '../_models/user';
@Injectable()
export class RegisterService {
    constructor(private http: Http) { }

    registerPost(user: IUser) {
        const headers=new Headers()
        headers.append("ContentType","application/json")
        return this.http.post('/urltoregister', user, {headers:headers}).map((response: Response) => 
        {
            response.json();
            localStorage.setItem('currentuser',JSON.stringify(user))
            });
    }

}