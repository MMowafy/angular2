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
var pickup_1 = require("../_models/pickup");
var pickup_service_1 = require("./pickup.service");
var PickUpComponent = (function () {
    function PickUpComponent(_pickupservice) {
        this._pickupservice = _pickupservice;
        this.pickup = {};
        this.shipmentTypeOptions = [new pickup_1.TypeOfShipment(1, 'Normal'), new pickup_1.TypeOfShipment(2, 'Cash')];
        this.transportationTypeOptions = [new pickup_1.TypeOfShipment(1, 'Motorcycle '), new pickup_1.TypeOfShipment(2, 'Car'), new pickup_1.TypeOfShipment(1, 'Company drop off')];
        console.log(this.shipmentTypeOptions);
    }
    PickUpComponent.prototype.onSubmitShipment = function (form) {
        this._pickupservice.pickupPost(this.pickup)
            .subscribe(function (data) { return console.log(data); });
    };
    return PickUpComponent;
}());
PickUpComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'pickup.component.html',
    }),
    __metadata("design:paramtypes", [pickup_service_1.PickUpService])
], PickUpComponent);
exports.PickUpComponent = PickUpComponent;
//# sourceMappingURL=pickup.component.js.map