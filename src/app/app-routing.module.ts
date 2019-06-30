import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanningListComponent } from './planning-list/planning-list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { LoginComponent } from './login/login.component';
import { DeleteListComponent } from './delete-list/delete-list.component';

import { 
		MatTableModule, 
		MatButtonModule, 
		MatCheckboxModule, 
		MatCardModule,
		MatDialogModule,
		MatDatepickerModule,
		MatInputModule,
		MatFormFieldModule,
		MatPaginatorModule,
		MatSelectModule,
		MatSortModule,
		MatSnackBarModule,
		MatIconModule } from '@angular/material';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'lists', component: PlanningListComponent },
	{ path: 'create-list', component: CreateListComponent },
	{ path: 'edit-list/:id', component: EditListComponent }
];

@NgModule({
  declarations: [  	
    PlanningListComponent,
    CreateListComponent,
	LoginComponent,
	DeleteListComponent,
    EditListComponent
  ],
  imports: [
	  RouterModule.forRoot(routes), 
	  MatTableModule,
	  FormsModule,
	  MatSnackBarModule,
	  MatSelectModule,
	  MatTableModule,
	  MatSortModule,
	  MatPaginatorModule,
	  MatFormFieldModule,
	  MatDatepickerModule,
      MatButtonModule, 
      MatInputModule,
      MatButtonModule,
	  MatNativeDateModule, 
	  MatDialogModule, 
	  MatRippleModule,
      ReactiveFormsModule,
      MatCheckboxModule, 
      MatCardModule,
      MatIconModule,	
      BrowserAnimationsModule,
  ],
  entryComponents: [DeleteListComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
