import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { AssetService } from 'src/app/Services/asset.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-viewassignedassets',
  templateUrl: './viewassignedassets.component.html',
  styleUrls: ['./viewassignedassets.component.css']
})
export class ViewassignedassetsComponent implements OnInit {

  constructor(private assetserv : AssetService,private empserv : EmployeeService) { }
  aslist : any
  ngOnInit(): void {
    this.empserv.getAllAssignedAssets().subscribe(data=>this.aslist=data);
  }
}
