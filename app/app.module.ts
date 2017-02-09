import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import { AppComponent }  from './app.component';
import {WelcomeComponent} from './home/welcome.component'
import {LoginModule} from './login/login.module'
import {PickUpModule} from'./pickups/pickup.module'
import {RegisterModule} from'./register/register.module'
import {SharedService} from './_services/shared.service'



@NgModule({
  imports: [ 
    BrowserModule,
    LoginModule,
    RegisterModule,
    PickUpModule,
    FormsModule,
    RouterModule.forRoot([
        {path:'welcome',component: WelcomeComponent,},
        {path:'',redirectTo: 'welcome',pathMatch:'full' },
        {path:'**',redirectTo: 'welcome',pathMatch:'full' }
             ])
             ],
  declarations: [ 
    AppComponent,
    WelcomeComponent
    ],
  providers: [
    SharedService],  
  bootstrap: [ 
    AppComponent ]
})
export class AppModule { }
