import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { AssetType } from 'src/app/Models/AssetType';
import { AssettypeService } from 'src/app/Services/assettype.service';

@Component({
  selector: 'app-editassettype',
  templateUrl: './editassettype.component.html',
  styleUrls: ['./editassettype.component.css']
})
export class EditassettypeComponent implements OnInit {

  constructor(private atypeserv: AssettypeService,private route : ActivatedRoute, private router : Router) { }

  type_id !: number;
  assettype : AssetType = new AssetType();

  ngOnInit(): void {
    this.type_id = this.route.snapshot.params['id'];
    this.atypeserv.getAssetTypeById(this.type_id).subscribe(data=>this.assettype=data);
  }
  
  OnSubmit()
  {
    this.updateAssetType(this.assettype);
  }
  
  public updateAssetType(assettype:AssetType)
  {
    this.atypeserv.updateAssetType(assettype).subscribe(data=>this.goToViewAssetTypes());
  }
  
  public goToViewAssetTypes()
  {
    this.router.navigate(['viewassettypes']);
  }
}
