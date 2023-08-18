import { AssetType } from "./AssetType";

export class Asset{
    assettype   : AssetType = new AssetType();
    asset_id   !: number
    asset_name !: string
    type_id    !: number
 }