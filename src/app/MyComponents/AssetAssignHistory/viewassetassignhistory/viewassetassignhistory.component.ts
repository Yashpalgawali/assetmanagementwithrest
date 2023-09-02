import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { AssetAssignHistory } from 'src/app/Models/AssetAssignHistory';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-viewassetassignhistory',
  templateUrl: './viewassetassignhistory.component.html',
  styleUrls: ['./viewassetassignhistory.component.css']
})
export class ViewassetassignhistoryComponent implements OnInit {

  constructor(private empserv:EmployeeService,private route : ActivatedRoute) { }
  ahist  !: AssetAssignHistory[];
  emp_id !: number;
  ngOnInit(): void {
      this.emp_id = this.route.snapshot.params['id'];
      this.empserv.getEmpHistById(this.emp_id).subscribe(data=>this.ahist=data);
  }


}
