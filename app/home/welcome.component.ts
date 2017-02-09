import { Component,OnInit } from '@angular/core';
import {IUser} from '../_models/user'

@Component({
    templateUrl: 'app/home/welcome.component.html'
})

export class WelcomeComponent implements OnInit {
    public pageTitle: string = 'Welcome back';
    currentUser:IUser;
    constructor(){
        this.currentUser=JSON.parse(localStorage.getItem('currentUser'))
        if (this.currentUser !=null){
         //   console.log("curren user is ===>",this.currentUser)

        }
    }
    ngOnInit(){
        //load data or posts of this user
    }
}
