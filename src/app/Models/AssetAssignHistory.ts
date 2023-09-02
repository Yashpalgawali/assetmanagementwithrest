import { Asset } from "./Asset"
import { Employee } from "./Employee"

export class AssetAssignHistory {
    hist_id        !: number
    operation_date !: string
    operation_time !: string
    operation      !: string
    asset_id       !: number
    asset          !: Asset
    employee       !: Employee

}