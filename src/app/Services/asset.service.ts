import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asset } from '../Models/Asset';
import { Observable, ObservableLike } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http : HttpClient) { }
  asset : Asset = new Asset();

  base_url = "http://localhost:7979/asset/";

  public saveAsset(asset : Asset):Observable<Asset[]>
  {
    return this.http.post<Asset[]>(`${this.base_url}`,asset);
  }

  public getAllAssets():Observable<Asset[]>
  {
    return this.http.get<Asset[]>(`${this.base_url}`);
  }
  public getAssetById(assetid : number):Observable<Asset>
  {
    return this.http.get<Asset>(`${this.base_url}${assetid}`);
  }

  public updateAsset(asset : Asset):Observable<Asset[]>
  {
    return this.http.post<Asset[]>(`${this.base_url}updateasset`,asset);
  }
}
