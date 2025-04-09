import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(private fb: FormBuilder,private httpClient: HttpClient, private service: ApiService, public router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {

    this.submitted = true;
    this.errorMessage = '';

    if (this.loginForm.invalid) return;  

      const { email, password } = this.loginForm.value;

      this.service.login(email, password).subscribe({
        next: res => {
          console.log('Token:', res);
          this.router.navigateByUrl("navbar");
          this.service.getUser().subscribe(user => {
            console.log('Usuario logueado:', user);
          });
        },
        error: err => {
          console.error('Login falló:', err);
        }
      });



  }
}
