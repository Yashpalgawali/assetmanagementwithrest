import { AssetType } from "./AssetType";


export class Asset{
    atype        !: AssetType
    asset_id     !: number
    asset_name   !: string
    asset_number !: string
    model_number !: string
    quantity     !: string
    type_id      !: number
 }