import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { ConfirmCreationComponent } from '../../confirm-creation/confirm-creation.component';

export class User {
  public name!: string | undefined;
  public email!: string | undefined;
  public password!: string | undefined;
}

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.scss']
})
export class CreateSupplierComponent implements OnInit {

  model = new User();

  onSubmit(form:any) {
    console.log(form.value!)
  }

  formGroup!: FormGroup;

  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   console.log(this.formGroup);
  // }

  routerConfirmCreation() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogReference = this.dialog.open(
      ConfirmCreationComponent, 
      dialogConfig
    );
  }
}
