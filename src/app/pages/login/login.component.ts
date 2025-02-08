import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import AuthRepository, { LoginModel } from '../../infra/repositories/auth.repository';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router, private authRepository: AuthRepository) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
  });

  async onSubmit() {
    const username = this.loginForm.value.username;

    var response = await this.authRepository.signin(new LoginModel(username as string));

    if (response.isValid) {
      this.router.navigate(['/home']);
    }

    alert(response.message);
  }
}
