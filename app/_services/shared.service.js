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
var SharedService = (function () {
    function SharedService() {
        this.changestate = new core_1.EventEmitter();
        this.authenticationState = { loginOrlogout: 'Login' };
    }
    SharedService.prototype.getFromLoginToHome = function () {
        return this.changestate;
    };
    SharedService.prototype.setData = function (currentState) {
        this.authenticationState.loginOrlogout = currentState;
        console.log(" setdata to ", currentState);
        this.changestate.emit(currentState);
    };
    return SharedService;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SharedService.prototype, "changestate", void 0);
SharedService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SharedService);
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map