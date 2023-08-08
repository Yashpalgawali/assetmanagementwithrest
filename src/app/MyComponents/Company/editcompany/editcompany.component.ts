import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { Company } from 'src/app/Models/Company';
import { CompanyserviceService } from 'src/app/Services/companyservice.service';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})
export class EditcompanyComponent implements OnInit {
  company  : Company = new Company();
  complist !: Company[];  
  constructor(private compserv : CompanyserviceService, private route: ActivatedRoute, private router :Router ) { }
  
  cid!:number;

  ngOnInit(): void {

    this.cid=this.route.snapshot.params['id'];
    this.compserv.getCompanyById(this.cid).subscribe(data=>this.company=data);
  }

  onSubmit() {
      this.updateCompany(this.company);
    }
    
    updateCompany(company :Company) {
      return this.compserv.updateCompany(company).subscribe(data=>this.gotToViewCompany());
    }

    gotToViewCompany() {
        this.router.navigate(['viewcompany']);
    }
}
