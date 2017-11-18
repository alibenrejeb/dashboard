import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlacesComponent } from './places.component';
import { routing } from './places.routing';
import { PlacesService } from '../../services/places/places.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [ PlacesComponent ],
  providers: [ PlacesService ]
})
export class PlacesModule {}