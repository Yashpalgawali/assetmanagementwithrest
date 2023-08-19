import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { Asset } from 'src/app/Models/Asset';
import { AssetService } from 'src/app/Services/asset.service';
import { AssettypeService } from 'src/app/Services/assettype.service';

@Component({
  selector: 'app-addasset',
  templateUrl: './addasset.component.html',
  styleUrls: ['./addasset.component.css']
})
export class AddassetComponent implements OnInit {

  atypelist : any;
  asset : Asset = new Asset();
  constructor(private assetserv : AssetService, private atypeserv : AssettypeService ,private router : Router) { }

  ngOnInit(): void {
    this.atypeserv.getAllAssettypes().subscribe(data=>this.atypelist=data);
  }

  OnSubmit(){
    this.assetserv.saveAsset(this.asset).subscribe(data=>this.goToViewAssets());    
  }

  public goToViewAssets()
  {
    this.router.navigate(['viewassets']);
  }

}
