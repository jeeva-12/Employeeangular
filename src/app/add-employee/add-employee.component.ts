import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employeeid=""
  name=""
  designstion=""
  email=""
  salary=""

  readValue=()=>
  {
    let data:any=
    {
      "employeeid:":this.employeeid,
      "name":this.name,
      "designstion":this.designstion,
      "email":this.email,
      "salary":this.salary
     }
     console.log(data)
  }

}
