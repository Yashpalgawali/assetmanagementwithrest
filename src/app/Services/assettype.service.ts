import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssetType } from '../Models/AssetType';
import { Observable } from 'rxjs';
import { GlobalComponents } from '../Global-Components';

@Injectable({
  providedIn: 'root'
})
export class AssettypeService {

  assettype : AssetType = new AssetType();

  type_id !: number;
  appurl  : any = GlobalComponents.appUrl;
  constructor(private http : HttpClient) { }

  base_url = this.appurl+"assettype/";
 
 public saveAssetType(assettype: AssetType):Observable<AssetType[]>
  {
    return this.http.post<AssetType[]>(`${this.base_url}`,assettype);
  }

  public getAllAssettypes():Observable<AssetType[]>
  {
    return this.http.get<AssetType[]>(`${this.base_url}`);
  }

  public getAssetTypeById(type_id :number )
  {
    return this.http.get<AssetType>(`${this.base_url}${type_id}`);
  }

  public updateAssetType(assettype: AssetType):Observable<AssetType[]>
  {
    return this.http.post<AssetType[]>(`${this.base_url}`,assettype);
  }
}