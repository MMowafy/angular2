import {Injectable} from '@angular/core'
import {CanActivate,Router} from '@angular/router'
@Injectable()
export class AuthenticationGaurd  implements CanActivate {
    constructor(private _route: Router){

    }

    canActivate(): boolean{
        if(localStorage.getItem('currentUser')){
            return true;
        }
        this._route.navigate(['/login'])
        return  false;

    }
}