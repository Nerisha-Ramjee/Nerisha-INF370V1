import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadAssetComponent } from './systems/asset-subsystem/read-asset/read-asset/read-asset.component';
import { ReadClientComponent } from './systems/client-subsystem/read-client/read-client/read-client.component';
import { ReadEmployeeComponent } from './systems/employee-subsystem/read-employee/read-employee/read-employee.component';
import { ReadReportComponent } from './systems/report-subsystem/read-report/read-report/read-report.component';
import { CreateSupplierComponent } from './systems/supplier-subsystem/create-supplier/create-supplier/create-supplier.component';
import { DeleteSupplierComponent } from './systems/supplier-subsystem/delete-supplier/delete-supplier/delete-supplier.component';
import { ReadSuppliersComponent } from './systems/supplier-subsystem/read-supplier/read-suppliers/read-suppliers.component';
import { UpdateSupplierComponent } from './systems/supplier-subsystem/update-supplier/update-supplier/update-supplier.component';
import { ReadUserComponent } from './systems/user-subsystem/read-user/read-user/read-user.component';

const routes: Routes = [
  {path: '', redirectTo:'',pathMatch:'full'},
  {path:'employees', component:ReadEmployeeComponent}, 
  {path:'clients', component:ReadClientComponent},  
  {path:'users', component:ReadUserComponent}, 
  {path:'assets', component:ReadAssetComponent}, 
  //Supplier Routing
  {path:'suppliers', component:ReadSuppliersComponent},
  {path:'addsupplier', component:CreateSupplierComponent}, 
  {path:'updatesupplier', component:UpdateSupplierComponent},
  //Report Routing
  {path:'reports', component:ReadReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
