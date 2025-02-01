import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import AuthService, { LoginModel } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
  });

  onSubmit() {
    const username = this.loginForm.value.username;

    console.log('Form submitted');
    console.log('username: ', username);

    this.authService.signin(new LoginModel(username as string));

    this.router.navigate(['/']);
  }
}
