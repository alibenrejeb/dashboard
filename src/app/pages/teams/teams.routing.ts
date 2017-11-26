import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent } from './teams.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent
  }
];

export const routing = RouterModule.forChild(routes);