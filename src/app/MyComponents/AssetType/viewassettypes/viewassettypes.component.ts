import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { AssettypeService } from 'src/app/Services/assettype.service';

@Component({
  selector: 'app-viewassettypes',
  templateUrl: './viewassettypes.component.html',
  styleUrls: ['./viewassettypes.component.css']
})
export class ViewassettypesComponent implements OnInit {

  constructor(private atypeserv : AssettypeService,private route : Router) { }

  atypelist : any;
  ngOnInit(): void {
    
    this.atypeserv.getAllAssettypes().subscribe(data=>this.atypelist=data);
  }

  getAssetTypeById(type_id : number)
  {
    this.route.navigate(['editassettypebyid',type_id]);
  }
}