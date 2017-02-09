import {Component}  from '@angular/core'
import {NgForm} from '@angular/forms'
import {IUser} from '../_models/user'
import {AuthenticationService} from '../_services/authenticaton.service'
import {Router} from '@angular/router'
import {SharedService} from '../_services/shared.service'
@Component({
    moduleId:module.id,
    templateUrl:'login.component.html'
})
export class LoginComponent {
    user : IUser;
    ok : boolean;
    error: string;
    /*
    constructor() {
        this.user.email="test"
        this.user.password='1111'
    }
    */
    constructor(private _loginservice: AuthenticationService, private _sharedservice :SharedService,private _router :Router){
        this.user=new IUser();
        this.ok=false;
    }
    onSubmitLogin(form :NgForm) {
        //console.log(form.value['email'])
        //console.log(this.user.email)
       // console.log(this.user.password)
      //  this._loginserive.loginPost(this.user).subscribe( data => console.log(data))
      this.ok = this._loginservice.loginPost(this.user)
      if (this.ok) {
          this._sharedservice.setData("Logout")
          this._router.navigate(['/welcome'])
      }
      else {
          this.error='Incorrect Email or password !! '
      }
    }
}
