import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../services/teams/teams.service';
import { Team } from '../../services/teams/team';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls : ['./teams.component.scss']
})

export class TeamsComponent implements OnInit {

  teams: Array<Team> = [];
  errorMessage: string;

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string'
      },
      code: {
        title: 'Code',
        type: 'string'
      },
      short_name: {
        title: 'Short name',
        type: 'string'
      },
    },
  };

  mySource: LocalDataSource = new LocalDataSource();

  constructor(private teamsService: TeamsService) {
    this.teamsService.getTeams().subscribe((data) => {
      this.mySource.load(data);
      console.log(this.mySource);
    });
  }

  getTeams() {
    this.teamsService.getTeams().subscribe(
      teams => this.teams = teams,
      error => this.errorMessage = <any> error
    );
  }

  ngOnInit() {
    this.getTeams();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event):void {
  } 

  onSaveConfirm(event):void {
  }

}
