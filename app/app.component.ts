import { Component } from '@angular/core';
import {AuthenticationService} from './_services/authenticaton.service'
import {FormsModule} from '@angular/forms'
import {Router} from '@angular/router'
import {SharedService} from './_services/shared.service'
@Component({
    selector: 'pm-app',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})
export class AppComponent {
     pageTitle: string = "PickUp's Title";
     state : string='Login'
     user : string;
     constructor(private _authenticate: AuthenticationService,private _shared:SharedService ,private _route: Router){
        this.user=JSON.parse(localStorage.getItem('currentUser'))
        
        if (this.user !=null){
            this.state="Logout"
        }
        else {
            this._shared.getFromLoginToHome().subscribe((data : string) => this.state=data);
        }
        console.log("try to " ,this.state)
    }
    logout(){
         this._authenticate.logout()
         this._shared.setData("Login")
         this._shared.getFromLoginToHome().subscribe((data : string) => this.state=data);
         this.state="Login"
         console.log("try to from logout " ,this.state)
         this._route.navigate(['/login'])
    }

 }
