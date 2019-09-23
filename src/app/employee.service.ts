import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'https://localhost:44399/api/Employee'; 

  constructor(private http: HttpClient) { }
  
  // This method is used to get all employee
  getAllEmployee() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }

  // This method is used to create the employee specified by id
  createEmployee(employee:Employee) : Observable<Employee>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Employee>(this.url + '/InsertEmployeeDetails/', employee, httpOptions);
  }
}
