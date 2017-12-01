import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login implements OnInit {

  public form:FormGroup;
  public email:AbstractControl;
  public username:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public error: string;

  constructor(  fb:FormBuilder, 
                private router: Router,
                private authenticationService: AuthService
              ) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() {
    this.authenticationService.logout();
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      this.authenticationService.login(values['username'], values['password'])
        .subscribe(result => {
          console.log(result);
          this.router.navigate(['/pages/teams']);
        }, loginError => this.error = loginError.message + ' : verify  your username or password !  ');
      console.log(values);
      console.log(this.username);
    }
  }
}
