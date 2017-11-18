import { Routes, RouterModule } from '@angular/router';
import { PlacesComponent } from './places.component';

const routes: Routes = [
    {
        path: '',
        component: PlacesComponent
    }
];

export const routing = RouterModule.forChild(routes);