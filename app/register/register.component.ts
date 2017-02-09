import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from './register.service';
import {IUser} from '../_models/user'

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    user: IUser ;

    constructor(
        private _router: Router,
        private _registerService: RegisterService) {
            this.user=new IUser();
         }

    register() {
        this._registerService.registerPost(this.user)
            .subscribe(
                data => {
                    console.log("registration successful")
                    this._router.navigate(['/login']);
                },
                error => {
                    console.log(error)
                });
    }
}