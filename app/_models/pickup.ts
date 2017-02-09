export interface IPickup {
    numberOfShipments: string;
    shipmentDate: string;
    shipmentTime: string;
    shipmentType: string
    transportationType: string
}
export class TypeOfShipment{
    id : number
    name : string
    constructor (id : number,name: string){
        this.id=id;
        this.name=name;
    }
}