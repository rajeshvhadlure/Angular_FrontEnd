import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public allEmployees: any;
  public employee = new Employee();
  constructor(private formbulider: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.loadAllEmployees();
  }

  loadAllEmployees() {
    this.allEmployees = this.employeeService.getAllEmployee();
  }

  SaveEmployees(){
    console.log(this.employee.Gender);
      this.employeeService.createEmployee(this.employee).subscribe(data=>{
      });
  }
}
