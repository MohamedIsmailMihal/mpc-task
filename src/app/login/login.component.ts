import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  onClickSubmit(data)
  {
    alert("Email Id: "+data.ei+"\nPassword: "+data.pw);
  }

  constructor() {
   
   }

  ngOnInit(): void {
  }

}
