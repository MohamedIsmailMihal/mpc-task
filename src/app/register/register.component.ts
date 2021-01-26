import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  onClickSubmit(data)
  {
    alert("Name: "+data.fn+" "+data.ln+"\nAge: "+data.Age+"\nPhone Number: "+data.pn+"\nPin Code: "+data.pc);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
