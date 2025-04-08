import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(private fb: FormBuilder,private httpClient: HttpClient, private service: ApiService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    // console.log("metodo onSubmit: ",this.loginForm);
    
    this.submitted = true;
    this.errorMessage = '';

    if (this.loginForm.invalid) return;  

      const { email, password } = this.loginForm.value;

      this.service.login(email, password).subscribe({
        next: (response) => {
          console.log("login component :",response);
          
          localStorage.setItem('token', response.token);
          alert('Login correcto ✅');
          // Redirigir o navegar a otra vista
        },
        // error: (err) => {
        //   this.errorMessage = 'Credenciales incorrectas ❌';
        // }
      });

    

  //   const { email, password } = this.loginForm.value;

  //   // Aquí va la lógica real, por ejemplo, llamar a un servicio
  //   if (email === 'admin@example.com' && password === '123456') {
  //     alert('Login exitoso ✅');
  //   } else {
  //     this.errorMessage = 'Credenciales incorrectas ❌';
  //   }
  // }


  }
}
