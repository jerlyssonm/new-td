import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartHomeComponent } from './start-home/start-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    StartHomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StartHomeComponent,
    LoginComponent
  ]
})
export class WellcomeModule { }
