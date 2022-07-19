import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { DashProfileComponent } from './dash-profile/dash-profile.component';
import { DashPlannerComponent } from './dash-planner/dash-planner.component';
import { DashAddtaskComponent } from './dash-addtask/dash-addtask.component';
import { DashTaskviewComponent } from './dash-taskview/dash-taskview.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    DashHomeComponent,
    DashProfileComponent,
    DashPlannerComponent,
    DashAddtaskComponent,
    DashTaskviewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports:[    
    DashHomeComponent,
    DashProfileComponent,
    DashPlannerComponent,
    DashAddtaskComponent,
    DashTaskviewComponent
  ]
})
export class DashboardModule { }
