"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_1 = require("../_models/user");
var authenticaton_service_1 = require("../_services/authenticaton.service");
var router_1 = require("@angular/router");
var shared_service_1 = require("../_services/shared.service");
var LoginComponent = (function () {
    /*
    constructor() {
        this.user.email="test"
        this.user.password='1111'
    }
    */
    function LoginComponent(_loginservice, _sharedservice, _router) {
        this._loginservice = _loginservice;
        this._sharedservice = _sharedservice;
        this._router = _router;
        this.user = new user_1.IUser();
        this.ok = false;
    }
    LoginComponent.prototype.onSubmitLogin = function (form) {
        //console.log(form.value['email'])
        //console.log(this.user.email)
        // console.log(this.user.password)
        //  this._loginserive.loginPost(this.user).subscribe( data => console.log(data))
        this.ok = this._loginservice.loginPost(this.user);
        if (this.ok) {
            this._sharedservice.setData("Logout");
            this._router.navigate(['/welcome']);
        }
        else {
            this.error = 'Incorrect Email or password !! ';
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [authenticaton_service_1.AuthenticationService, shared_service_1.SharedService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map