import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl,  Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { setToLocalStorage } from '../core/local-storage';

const List = [
  {id:0, title: 'testing', description: 'Helium', status: 1, 
  date: '2019-06-26T20:00:00.000Z', placeName: 'jhghg', address: 'ghh'},
  {id:1, title: 'test', description: 'Helium', status: 0, 
  date: '2019-06-26T20:00:00.000Z', placeName: 'jhghg', address: 'ghh'},
];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	login: FormGroup;
  constructor(public router: Router) { }

  ngOnInit() {
    this.login = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
	sendLogin(val) {
	 if(this.login.valid) {
	 	 this.router.navigate(['lists']);	 	
   	 setToLocalStorage('Lists', List);
	  }
	}
}
