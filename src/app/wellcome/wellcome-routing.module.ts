import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StartHomeComponent } from './start-home/start-home.component';

const routes: Routes = [
    {
        path:'',
        component: StartHomeComponent,
        children: [
            {path:'login', component: LoginComponent}
        ]
    }
]

@NgModule({
    declarations: [
        StartHomeComponent,
        LoginComponent
    ],
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class WellcomeRoutingModule {}