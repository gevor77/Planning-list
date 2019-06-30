import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getFromLocalStorage, setToLocalStorage } from '../core/local-storage';
import { FormGroup,  FormControl,  Validators } from '@angular/forms'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {
  updateList: FormGroup;
  public id;
  public dataList: any = [];
  public data: any = {};
  public updateData: any = [];
  public newdataLis: any = [];
  constructor(public routerActivated: ActivatedRoute, public router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
  	this.routerActivated.params.subscribe(params => {
      this.id = params.id;
      this.dataList = getFromLocalStorage('Lists');
      this.newdataLis = getFromLocalStorage('Lists');
      for(let i = 0; i < this.dataList.length; i++){
        if(this.dataList[i].id == this.id){
          this.data = this.dataList[i];
        }
      }
    });
    this.formsGroup();
  }

  formsGroup() {
    this.updateList = new FormGroup ({
      title: new FormControl(this.data.title, Validators.required),
      description: new FormControl(this.data.description, Validators.required),
      placeName: new FormControl(this.data.placeName, Validators.required),
      address: new FormControl(this.data.address, Validators.required),
      date: new FormControl(this.data.date, Validators.required),
      status: new FormControl(this.data.status, Validators.required),
      id: new FormControl(this.data.id),
    });
  }

  update(val) {
      const updateData = this.newdataLis.filter(w => w.id !== val.id);
      this.router.navigate(['/lists']);
      updateData.push(val);
      setToLocalStorage('Lists', updateData);
      this._snackBar.open('List Updated', 'Undo', { duration: 2000});
  }
}
