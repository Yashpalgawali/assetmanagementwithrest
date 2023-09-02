import { Department } from "./Department"
import { Designation } from "./Designation"

export class Employee {
    emp_id       !: number
    emp_name     !: string
    emp_email    !: string
    emp_contact  !: string
    multi_assets !: string
    comments     !: string
    designation  !: Designation
    department   !: Department
}