import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcompanyComponent } from './MyComponents/Company/addcompany/addcompany.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditcompanyComponent } from './MyComponents/Company/editcompany/editcompany.component';
import { ViewcompanyComponent } from './MyComponents/Company/viewcompany/viewcompany.component';
import { AdddepartmentComponent } from './MyComponents/Department/adddepartment/adddepartment.component';
import { ViewdepartmentsComponent } from './MyComponents/Department/viewdepartments/viewdepartments.component';
import { EditdepartmentComponent } from './MyComponents/Department/editdepartment/editdepartment.component';
import { AdddesignationComponent } from './MyComponents/Designation/adddesignation/adddesignation.component';
import { ViewdesignationComponent } from './MyComponents/Designation/viewdesignation/viewdesignation.component';
import { EditdesignationComponent } from './MyComponents/Designation/editdesignation/editdesignation.component';
import { AddassettypeComponent } from './MyComponents/AssetType/addassettype/addassettype.component';
import { ViewassettypesComponent } from './MyComponents/AssetType/viewassettypes/viewassettypes.component';
import { EditassettypeComponent } from './MyComponents/AssetType/editassettype/editassettype.component';
import { AddassetComponent } from './MyComponents/Assets/addasset/addasset.component';
import { ViewassetComponent } from './MyComponents/Assets/viewasset/viewasset.component';
import { EditassetComponent } from './MyComponents/Assets/editasset/editasset.component';


@NgModule({
  declarations: [
    AppComponent,
    AddcompanyComponent,
    ViewcompanyComponent,
    EditcompanyComponent,
    AdddepartmentComponent,
    ViewdepartmentsComponent,
    EditdepartmentComponent,
    AdddesignationComponent,
    ViewdesignationComponent,
    EditdesignationComponent,
    AddassettypeComponent,
    ViewassettypesComponent,
    EditassettypeComponent,
    AddassetComponent,
    ViewassetComponent,
    EditassetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
