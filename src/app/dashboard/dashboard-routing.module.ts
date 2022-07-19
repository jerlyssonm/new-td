import { NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { DashProfileComponent } from './dash-profile/dash-profile.component';

const routes: Routes = [
    {
        path:"dashboard",
        component: DashHomeComponent,
        children:[
            {path:"profile", component: DashProfileComponent}
        ]    
}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule {}
