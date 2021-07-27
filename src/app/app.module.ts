import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './view-components/layouts/side-navigation-bar/side-navbar/side-navbar.component';
import { CreateEmployeeComponent } from './systems/employee-subsystem/create-employee/create-employee/create-employee.component';
import { ReadEmployeeComponent } from './systems/employee-subsystem/read-employee/read-employee/read-employee.component';
import { CreateClientComponent } from './systems/client-subsystem/create-client/create-client/create-client.component';
import { ReadClientComponent } from './systems/client-subsystem/read-client/read-client/read-client.component';
import { UpdateClientComponent } from './systems/client-subsystem/update-client/update-client/update-client.component';
import { ReadSuppliersComponent } from './systems/supplier-subsystem/read-supplier/read-suppliers/read-suppliers.component';
import { ReadUserComponent } from './systems/user-subsystem/read-user/read-user/read-user.component';
import { ReadAssetComponent } from './systems/asset-subsystem/read-asset/read-asset/read-asset.component';
import { CreateSupplierComponent } from './systems/supplier-subsystem/create-supplier/create-supplier/create-supplier.component';
import { UpdateSupplierComponent } from './systems/supplier-subsystem/update-supplier/update-supplier/update-supplier.component';
import { DeleteSupplierComponent } from './systems/supplier-subsystem/delete-supplier/delete-supplier/delete-supplier.component';
import { ConfirmCreationComponent } from './systems/supplier-subsystem/confirm-creation/confirm-creation.component';
import { ReadReportComponent } from './systems/report-subsystem/read-report/read-report/read-report.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';



const angularMaterials = [
  MatIconModule, 
  MatDialogModule, 
  MatFormFieldModule,
  MatInputModule,
]

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    CreateEmployeeComponent,
    ReadEmployeeComponent,
    CreateClientComponent,
    ReadClientComponent,
    UpdateClientComponent,
    ReadSuppliersComponent,
    ReadUserComponent,
    ReadAssetComponent,
    CreateSupplierComponent,
    UpdateSupplierComponent,
    DeleteSupplierComponent,
    ConfirmCreationComponent,
    ReadReportComponent
  ],
  imports: [
    ...angularMaterials, 
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    BrowserAnimationsModule, 
    NgBootstrapFormValidationModule.forRoot(), 
    NgBootstrapFormValidationModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
