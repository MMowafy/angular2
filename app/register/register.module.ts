import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {HttpModule} from '@angular/http'

import {RegisterComponent} from './register.component'
import {RegisterService} from './register.service'
@NgModule ({
    imports: [
       CommonModule,
       HttpModule,
       FormsModule,
       RouterModule.forChild([
            {path:'register' , component: RegisterComponent}
        ])
        ],
    declarations: [
        RegisterComponent,
    ],
    providers: [
        RegisterService
    ]
})
export class RegisterModule {
}