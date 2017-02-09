import {Injectable}from '@angular/core'
import {Http,Response,Headers} from '@angular/http'
import 'rxjs/add/operator/map'

import{IPickup} from '../_models/pickup'

@Injectable()
export class PickUpService {
    constructor(private _http :Http){
    }
    pickupPost(pickup : IPickup){
        console.log("hello from pickup service" ,pickup)
        const headers=new Headers()
        headers.append("ContentType","application/json")
        return this._http.post("UrlToPickUpBackend",pickup,{headers:headers})
        .map((data:Response) =>data.json) ;
    }
}