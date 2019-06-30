import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl,  Validators } from '@angular/forms'
import { DataService } from '../services/data.service';
import { setToLocalStorage, getFromLocalStorage } from '../core/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {
  createList: FormGroup;
  data: any = [];
  constructor(private dataService: DataService, public router: Router) { }

  ngOnInit() {
    this.createList = new FormGroup ({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      placeName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      id: new FormControl(),
    });
  }
  formList(f) {
    if(this.createList.valid) {    
       this.data = getFromLocalStorage('Lists');        
       this.router.navigate(['lists']);
       f.id = this.data.length;
       this.data.push(f);
       setToLocalStorage('Lists', this.data);
    }
  }
}
