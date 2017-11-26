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
  team: Team;
  errorMessage: string;
  statusCode: string;

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: true,
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
    console.log('onDeleteConfirm');
    if (window.confirm('Are you sure you want to delete?')) {
      let teamId = event.data['id'];
      this.teamsService.deleteTeamById(teamId).subscribe(
        statusCode => console.log(statusCode + " No content"),
        errorCode => this.statusCode = errorCode
      );
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event):void {
    console.log('onCreateConfirm');
    console.log(event);
    if (window.confirm('Are you sure you want to create?')) {
      this.team = event.newData;
      this.teamsService.createTeam(this.team).subscribe(
        statusCode => console.log(statusCode + " OK"),
        errorCode => this.statusCode = errorCode
      );
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event):void {
    console.log('onSaveConfirm');
    //console.log(event);
    if (window.confirm('Are you sure you want to save?')) {
      this.team = event.newData;
      this.teamsService.updateTeam(this.team).subscribe(
        statusCode => console.log(statusCode + " OK"),
        errorCode => this.statusCode = errorCode
      );
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

}
