import { Company } from "./Company";

export class Department{
    company   :  Company = new Company()
    dept_id   !: number
    dept_name !: string
    comp_id   !: number
}