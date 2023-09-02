import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { AssetService } from 'src/app/Services/asset.service';

@Component({
  selector: 'app-viewasset',
  templateUrl: './viewasset.component.html',
  styleUrls: ['./viewasset.component.css']
})
export class ViewassetComponent implements OnInit {

  assetlist :any;
  constructor(private assetserv : AssetService,private route : Router) { }

  ngOnInit(): void {
    this.assetserv.getAllAssets().subscribe(data=>this.assetlist=data);
  }
  
  public getAssetByAssetId(asset_id : number)
  {
      this.route.navigate(['editassetbyid',asset_id]);
  }

}
