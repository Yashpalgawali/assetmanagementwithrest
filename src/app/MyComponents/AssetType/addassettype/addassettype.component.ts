import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { AssetType } from 'src/app/Models/AssetType';
import { AssettypeService } from 'src/app/Services/assettype.service';

@Component({
  selector: 'app-addassettype',
  templateUrl: './addassettype.component.html',
  styleUrls: ['./addassettype.component.css']
})
export class AddassettypeComponent implements OnInit {

  constructor(private atypeserv : AssettypeService,private router : Router) { }
  
  assettype : AssetType = new AssetType();

  ngOnInit(): void {
  }

  OnSubmit()
  {
    this.saveAssetType(this.assettype);
  }
  public saveAssetType(assettype : AssetType)
  {
    return this.atypeserv.saveAssetType(assettype).subscribe(data=>this.goToViewAssetTypes());
  }

  public goToViewAssetTypes()
  {
      this.router.navigate(['viewassettypes']);
  }
}
