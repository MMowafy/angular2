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
var authenticaton_service_1 = require("./_services/authenticaton.service");
var router_1 = require("@angular/router");
var shared_service_1 = require("./_services/shared.service");
var AppComponent = (function () {
    function AppComponent(_authenticate, _shared, _route) {
        var _this = this;
        this._authenticate = _authenticate;
        this._shared = _shared;
        this._route = _route;
        this.pageTitle = "PickUp's Title";
        this.state = 'Login';
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.user != null) {
            this.state = "Logout";
        }
        else {
            this._shared.getFromLoginToHome().subscribe(function (data) { return _this.state = data; });
        }
        console.log("try to ", this.state);
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this._authenticate.logout();
        this._shared.setData("Login");
        this._shared.getFromLoginToHome().subscribe(function (data) { return _this.state = data; });
        this.state = "Login";
        console.log("try to from logout ", this.state);
        this._route.navigate(['/login']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        moduleId: module.id,
        templateUrl: 'app.component.html'
    }),
    __metadata("design:paramtypes", [authenticaton_service_1.AuthenticationService, shared_service_1.SharedService, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map