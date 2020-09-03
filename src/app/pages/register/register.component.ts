import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = '';
  password = '';
  message = "";
  errorMessage = ""; //Validacion para el manejo de errores
  error: {name: string, message: string} = { name: "", message: ""} //Manejo de errores en Firebase

  constructor(private authservice : AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  clearError(){
    this.errorMessage = '';
    this.error = {name: '', message: ''};
  }

  register(){
    this.clearError()
    if(this.validateForm(this.email, this.password)){
      this.authservice.registerWithEmail(this.email, this.password).then(()=>{
        this.router.navigate(['/userinfo'])
      }).catch(_error =>{
        this.error = _error,
        this.router.navigate(['/register'])
      })
    }
  }

  validateForm(email, password){
    if(email.length === 0){
      this.errorMessage = 'Ponga un correo valido';
      return false;
    }
    if(password.length === 0){
      this.errorMessage = 'Ponga una contraseña valida';
      return false;
    }

    if(password.length < 6){
      this.errorMessage = 'La contraseña elegida es muy debil. Por favor ponga una que tenga al menos 6 caracteres';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

}
