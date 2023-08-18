import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcompanyComponent }  from './MyComponents/Company/addcompany/addcompany.component';
import { ViewcompanyComponent } from './MyComponents/Company/viewcompany/viewcompany.component';
import { EditcompanyComponent } from './MyComponents/Company/editcompany/editcompany.component';
import { AdddepartmentComponent } from './MyComponents/Department/adddepartment/adddepartment.component';
import { ViewdepartmentsComponent } from './MyComponents/Department/viewdepartments/viewdepartments.component';
import { EditdepartmentComponent } from './MyComponents/Department/editdepartment/editdepartment.component';
import { AdddesignationComponent } from './MyComponents/Designation/adddesignation/adddesignation.component';
import { ViewdesignationComponent } from './MyComponents/Designation/viewdesignation/viewdesignation.component';
import { EditdesignationComponent } from './MyComponents/Designation/editdesignation/editdesignation.component';


const routes: Routes = [
  { path : "addcompany" , component : AddcompanyComponent},
  { path : "viewcompany", component : ViewcompanyComponent },
  { path : "editcompbyid/:id", component : EditcompanyComponent },
  { path : "adddepartment" , component : AdddepartmentComponent},
  { path : "viewdepartment", component : ViewdepartmentsComponent },
  { path : "editdeptbyid/:id", component : EditdepartmentComponent },
  { path : "adddesignation" , component : AdddesignationComponent},
  { path : "viewdesignations" , component : ViewdesignationComponent},
  { path : "editdesigbyid/:id", component : EditdesignationComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
