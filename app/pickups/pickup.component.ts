import{Component} from '@angular/core'
import{NgForm} from '@angular/forms'

import{IPickup,TypeOfShipment} from '../_models/pickup'
import{PickUpService} from'./pickup.service'
@Component({
    moduleId:module.id,
    templateUrl:'pickup.component.html',
})
export class PickUpComponent {
    pickup : IPickup;
    error: string;
    shipmentTypeOptions: TypeOfShipment[]
    transportationTypeOptions: TypeOfShipment[]
    constructor(private _pickupservice:PickUpService){
        this.pickup=<IPickup>{};
        this.shipmentTypeOptions= [new TypeOfShipment(1,'Normal'), new TypeOfShipment(2,'Cash')];
        this.transportationTypeOptions=[new TypeOfShipment(1,'Motorcycle '), new TypeOfShipment(2,'Car'),new TypeOfShipment(1,'Company drop off')]
        console.log(this.shipmentTypeOptions)
    }
    onSubmitShipment(form: NgForm){
        this._pickupservice.pickupPost(this.pickup)
        .subscribe(data =>console.log(data))
    }

}
