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
  selectDivisionList = [];
  team: Team;
  errorMessage: string;
  statusCode: string;

  settings = {};

  customSettings = {
    noDataMessage: 'Loading...',
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
        type: 'string',
        filter: false
      },
      code: {
        title: 'Code',
        type: 'string',
        filter: false
      },
      short_name: {
        title: 'Short name',
        type: 'string',
        filter: false
      },
      color_home: {
        title: 'Color home',
        type: 'string',
        filter: false
      },
      color_away: {
        title: 'Color away',
        type: 'string',
        filter: false
      },
      division:{
        title: 'Division',
        type: 'html',
        filter: false,
        valuePrepareFunction: (division) => {
          return division.name;
        },
        editor: {
          type: 'list',
          config: {
            list: []
          },
        }
      },
    },
  };

  mySource: LocalDataSource = new LocalDataSource();

  constructor(private teamsService: TeamsService) {
    this.teamsService.getAllDivision().subscribe(data => {
      data.forEach(division =>{
          this.selectDivisionList.push({value: division.id, title: division.name});
      });

      this.customSettings.columns.division.editor.config.list = this.selectDivisionList;
      this.settings = Object.assign({}, this.customSettings);
      console.log(this.settings);
    });

    this.teamsService.getTeams().subscribe((data) => {
      this.mySource.load(data);
      console.log(this.mySource);
    });
  }

  onSearch(query: string = '') {
    this.mySource.setFilter([
      // fields we want to include in the search
      {
        field: 'Name',
        search: query
      },
      {
        field: 'code',
        search: query
      },
      {
        field: 'short_name',
        search: query
      }
    ], false);
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
    console.log(event);
    if (window.confirm('Are you sure you want to save?')) {
      this.team = event.newData;
      this.teamsService.updateTeam(this.team).subscribe(
        statusCode => console.log(statusCode + " OK"),
        errorCode => this.statusCode = errorCode
      );
      this.mySource.refresh();
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

}
