import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = "";
  password = "";
  errorMessage = ""; //Validacion para el manejo de errores
  error: {name:string, message:string} = { name: "", message: ""} //Manejo de errores en Firebase

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    alert("Ahuevos que si papaaaa")
  }

}
