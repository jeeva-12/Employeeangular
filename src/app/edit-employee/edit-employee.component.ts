import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  employeeid=""

  edit=()=>
  {
    let data:any=
    {
      "employeeid":this.employeeid
    }
    console.log(data)
  }

}
