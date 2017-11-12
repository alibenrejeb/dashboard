import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../../services/users-api.service';
import { User } from './user';

@Component({
    selector: 'nga-users',
    templateUrl: './users.component.html',
    styleUrls: ['./user.component.css'],
})

export class UsersComponent implements OnInit {

    user: User;
    hobbies: string[];
    isEdit: boolean = false;

    constructor(private usersApiService: UsersApiService) {
        console.log('constructor UsersComponent is running ...');
    }

    ngOnInit() {
        console.log('ngOnInit is running ...');
        this.user = {
            name: 'Ali Ben Rejeb',
            age: 30,
            email: 'ali.benrejeb@sofrecom.com',
            address: {
                street: '26 Rue El Moncef Bay',
                city: 'Kalaat El Andalous',
                zip: '2022',
            },
        };
        this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    }

  onClick() {
    this.user.name = 'Brad Traversy';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}
