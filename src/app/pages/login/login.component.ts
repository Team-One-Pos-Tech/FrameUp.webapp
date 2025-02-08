import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import AuthRepository, { LoginModel } from '../../infra/repositories/auth.repository';
import AuthenticationService, { CurrentUser } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private router: Router, 
    private authRepository: AuthRepository,
    private authService: AuthenticationService
  ) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
  });

  async onSubmit() {
    const username = this.loginForm.value.username;

    var response = await this.authRepository.signin(new LoginModel(username as string));

    if (response.isValid) {

      this.authService.setCurrentUser(<CurrentUser>{
        username: username,
        apiKey: response.apiKey
      });

      this.router.navigate(['/']);

    } else {
      alert(response.message);
    }

  }
}
