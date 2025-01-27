import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { PorfolioComponent } from './porfolio/porfolio.component';

export const routes: Routes = [

    { path: 'Nav', component: NavComponent },
    { path: 'porfolio', component: PorfolioComponent }

];
