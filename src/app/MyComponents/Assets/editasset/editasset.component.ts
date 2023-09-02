import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { Asset } from 'src/app/Models/Asset';
import { AssetService } from 'src/app/Services/asset.service';
import { AssettypeService } from 'src/app/Services/assettype.service';

@Component({
  selector: 'app-editasset',
  templateUrl: './editasset.component.html',
  styleUrls: ['./editasset.component.css']
})
export class EditassetComponent implements OnInit {

  asset : Asset = new Asset();
  astid !: number;
  atypelist : any;
  constructor(private assetserv : AssetService,private router : Router,private atypeserv : AssettypeService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.astid = this.route.snapshot.params['id'];
    this.atypeserv.getAllAssettypes().subscribe(data=>this.atypelist=data);
    this.assetserv.getAssetById(this.astid).subscribe(data=>this.asset=data);
  }

  OnSubmit()
  {
    this.assetserv.updateAsset(this.asset).subscribe(data=>this.goToViewAssets());
  }

  public goToViewAssets()
  {
    this.router.navigate(['viewassets']);
  }
}
