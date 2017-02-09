import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {HttpModule} from '@angular/http'

import {LoginComponent} from './login.component'
import {AuthenticationService} from '../_services/authenticaton.service'
@NgModule ({
    imports: [
       CommonModule,
       HttpModule,
       FormsModule,
       RouterModule.forChild([
            {path:'login' , component: LoginComponent}
        ])
        ],
    declarations: [
        LoginComponent,
    ],
    providers: [
        AuthenticationService
    ]
})
export class LoginModule {
}