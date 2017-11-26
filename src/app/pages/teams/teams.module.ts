import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TeamsComponent } from './teams.component';
import { routing } from './teams.routing';
import { TeamsService } from '../../services/teams/teams.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
    TeamsComponent
  ],
  providers: [ TeamsService ]
})
export class TeamsModule {}