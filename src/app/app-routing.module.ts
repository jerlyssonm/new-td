import { NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { LoginComponent } from './wellcome/login/login.component';
import { RegisterComponent } from './wellcome/register/register.component';
import { StartHomeComponent } from './wellcome/start-home/start-home.component';

const routes: Route[] = [
    {path:'', component: StartHomeComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(
        m => m.DashboardModule
    )}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
