import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { getFromLocalStorage } from '../core/local-storage';
import { MatDialog } from '@angular/material/dialog';
import { DeleteListComponent } from '../delete-list/delete-list.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import * as moment from 'moment';
const _moment = moment;
export interface PeriodicElement {
  id: number,
  title: string;
  description: string;
  status: number;
  date: string;
  placeName: string;
  address: string;
}

@Component({
  selector: 'app-planning-list',
  templateUrl: './planning-list.component.html',
  styleUrls: ['./planning-list.component.scss'],
  providers: [DataService]
})
export class PlanningListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'description', 'status', 'date', 'placeName', 'address'];
  dataSource: any = [];
  statusDate = true;
  status = true;
  statusCompare;
  data: any = [];
  constructor(public dialog: MatDialog) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
 
  ngOnInit() {
    this.data = getFromLocalStorage('Lists');
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.otherDatess();
  }
 
  otherDatess() {
    this.data.filter(w => {
      const startDate: any = _moment(new Date());
      const endDate: any = _moment(w.date);      
      const duration = endDate.diff(startDate);
      console.log(duration);
      this.statusCompare = duration;
      if (this.statusCompare <= 86400000) {
        this.statusDate = true;
        console.log(this.statusDate);
      }
      //  else {
      //   this.statusDate = false;
      //   this.status = true;
      //   console.log(this.statusDate)
      // }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id): void {
    for(let i = 0; i < this.data.length; i++){
      if (this.data[i].id == id) {
        const dialogRef = this.dialog.open(DeleteListComponent, {
          width: '250px',
          data: this.data[i]
        });        
        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
          this.dataSource = result;
        });
      }      
    }
  }
}
