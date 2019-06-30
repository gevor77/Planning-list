import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getFromLocalStorage, setToLocalStorage } from '../core/local-storage';

@Component({
  selector: 'app-delete-list',
  templateUrl: './delete-list.component.html',
  styleUrls: ['./delete-list.component.scss']
})
export class DeleteListComponent implements OnInit {
  public dataLists: any = [];
  id;
  constructor(public dialogRef: MatDialogRef<DeleteListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
    this.dataLists = getFromLocalStorage('Lists');
    this.id = this.data.id;
  }

  cancel(){
    this.dialogRef.close();
  }

  delete() {
      const dataArray = this.dataLists.filter(w => w.id !== this.id);    
      setTimeout(()=> {
        setToLocalStorage('Lists', dataArray); 
      }, 500); 
      this.dialogRef.close(dataArray);
    
  }
}
