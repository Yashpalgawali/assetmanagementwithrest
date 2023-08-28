import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/Models/Company';
import { CompanyserviceService } from 'src/app/Services/companyservice.service';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {

  company : Company = new Company();
  
  constructor(private compserv : CompanyserviceService,private router : Router) { }

  ngOnInit(): void {
    
  }

   onSubmit() {
      this.compserv.saveCompany(this.company).subscribe(data=>this.gotToViewCompany()),(error : any )=>console.error(error);
   }
  
  gotToViewCompany() {
    this.router.navigate(['viewcompany']);
  }
}
