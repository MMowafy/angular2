import {Injectable} from '@angular/core'
import {Http,Response,Headers} from '@angular/http'
import {IUser} from '../_models/user'

import 'rxjs/add/operator/map'
@Injectable()
export class AuthenticationService {
    constructor (private _http: Http) {
    }
    loginPost(user: IUser) : boolean{
        const headers = new Headers();
        headers.append('Content-Type','application/json');
        //return this._http.post('/urlToBackEnd',user , {headers: headers}).map((data : Response) =>data.json())
        //console.log('hello from service', user.email)
          if(user.email=='m_mowafy_1993@hotmail.com' && user.password=='123'){
             // console.log('hello from true')
              user.firstName="mostafa"
              user.lastName="mowafy"
              localStorage.setItem('currentUser',JSON.stringify(user))
              return true;
        }
        else {
            return false;
        }
    }
    logout() {
        localStorage.removeItem('currentUser')
    }


}