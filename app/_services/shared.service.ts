import {Injectable,EventEmitter,Output} from '@angular/core'
export interface state {
   loginOrlogout:string;
}
@Injectable()
export class SharedService {
    @Output() changestate: EventEmitter<string>=new EventEmitter();

    authenticationState : state
    constructor(){
        this.authenticationState= <state> {loginOrlogout :'Login'};
    }
    getFromLoginToHome() {
        return  this.changestate;
    }
    setData(currentState : string){
        this.authenticationState.loginOrlogout=currentState;
        console.log(" setdata to ", currentState)
        this.changestate.emit(currentState)
    }
}