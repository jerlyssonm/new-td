import { NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
    {
        path:'',
        loadChildren: () => import('./wellcome/wellcome.module').then(
            m => m.WellcomeModule
        )
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
