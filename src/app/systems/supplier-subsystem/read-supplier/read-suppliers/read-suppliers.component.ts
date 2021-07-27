import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateSupplierComponent } from '../../create-supplier/create-supplier/create-supplier.component';
import { DeleteSupplierComponent } from '../../delete-supplier/delete-supplier/delete-supplier.component';
import { UpdateSupplierComponent } from '../../update-supplier/update-supplier/update-supplier.component';

@Component({
  selector: 'app-read-suppliers',
  templateUrl: './read-suppliers.component.html',
  styleUrls: ['./read-suppliers.component.scss']
})
export class ReadSuppliersComponent implements OnInit {

  constructor(
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  routerAddSupplier() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogReference = this.dialog.open(
      CreateSupplierComponent, 
      dialogConfig
    );
  }

  routerUpdateSupplier() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogReference = this.dialog.open(
      UpdateSupplierComponent, 
      dialogConfig
    );
  }

  routerDeleteSupplier() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogReference = this.dialog.open(
      DeleteSupplierComponent, 
      dialogConfig
    );
  }
}
