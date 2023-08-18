import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asset } from '../Models/Asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http : HttpClient) { }
  asset : Asset = new Asset();

  base_url = "http://localhost:7979/asset/";

  
}
