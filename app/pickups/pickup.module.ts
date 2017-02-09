import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'

import {PickUpComponent} from './pickup.component'
import {PickUpService} from'./pickup.service'
import {AuthenticationGaurd} from '../_guards/authentication.guard'
@NgModule ({
    imports: [
       CommonModule,
       FormsModule,
       RouterModule.forChild([
            {path:'pickup' , component: PickUpComponent ,canActivate:[AuthenticationGaurd]}
        ])
        ],
    declarations: [
        PickUpComponent,
    ],
    providers: [
        PickUpService,
        AuthenticationGaurd
    ]
})
export class PickUpModule {
}