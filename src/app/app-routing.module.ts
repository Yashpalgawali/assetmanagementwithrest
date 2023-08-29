import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcompanyComponent }  from './MyComponents/Company/addcompany/addcompany.component';
import { ViewcompanyComponent } from './MyComponents/Company/viewcompany/viewcompany.component';
import { EditcompanyComponent } from './MyComponents/Company/editcompany/editcompany.component';
import { AdddepartmentComponent } from './MyComponents/Department/adddepartment/adddepartment.component';
import { ViewdepartmentsComponent } from './MyComponents/Department/viewdepartments/viewdepartments.component';
import { EditdepartmentComponent } from './MyComponents/Department/editdepartment/editdepartment.component';
import { AdddesignationComponent }  from './MyComponents/Designation/adddesignation/adddesignation.component';
import { ViewdesignationComponent } from './MyComponents/Designation/viewdesignation/viewdesignation.component';
import { EditdesignationComponent } from './MyComponents/Designation/editdesignation/editdesignation.component';
import { AddassettypeComponent }    from './MyComponents/AssetType/addassettype/addassettype.component';
import { EditassettypeComponent } from './MyComponents/AssetType/editassettype/editassettype.component';
import { ViewassettypesComponent } from './MyComponents/AssetType/viewassettypes/viewassettypes.component';
import { AddassetComponent } from './MyComponents/Assets/addasset/addasset.component';
import { ViewassetComponent } from './MyComponents/Assets/viewasset/viewasset.component';
import { EditassetComponent } from './MyComponents/Assets/editasset/editasset.component';
import { AddemployeeComponent } from './MyComponents/Employee/addemployee/addemployee.component';
import { ViewemployeeComponent } from './MyComponents/Employee/viewemployee/viewemployee.component';
import { EditemployeeComponent } from './MyComponents/Employee/editemployee/editemployee.component';


const routes: Routes = [
  { path : "addcompany" , component : AddcompanyComponent},
  { path : "viewcompany", component : ViewcompanyComponent },
  { path : "editcompbyid/:id", component : EditcompanyComponent },
  { path : "adddepartment" , component : AdddepartmentComponent},
  { path : "viewdepartment", component : ViewdepartmentsComponent },
  { path : "editdeptbyid/:id", component : EditdepartmentComponent },
  { path : "adddesignation" , component : AdddesignationComponent},
  { path : "viewdesignations" , component : ViewdesignationComponent},
  { path : "editdesigbyid/:id", component : EditdesignationComponent },
  { path : "addassettype" , component : AddassettypeComponent},
  { path : "viewassettypes", component : ViewassettypesComponent },
  { path : "editassettypebyid/:id", component : EditassettypeComponent },
  { path : "addasset" , component : AddassetComponent},
  { path : "viewassets" , component : ViewassetComponent},
  { path : "editassetbyid/:id" , component : EditassetComponent},
  { path : "addemployee" , component : AddemployeeComponent} ,
  { path : "viewemployee", component : ViewemployeeComponent },
  { path : "editempbyid/:id", component : AddemployeeComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
