import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import AuthRepository, { LoginModel } from '../../infra/repositories/auth.repository';
import AuthenticationService, { CurrentUser } from '../../services/authentication.service';
import ClientRepository from '../../infra/repositories/client.repository';

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
    private clientRepository: ClientRepository,
    private authService: AuthenticationService
  ) { }

  loginForm = new FormGroup({
    username: new FormControl('246.408.220-14'),
  });

  async onSubmit() {
    const username = this.loginForm.value.username;

    var response = await this.authRepository.signin(new LoginModel(username as string));

    if (response.isValid) {

      var userInfo = await this.clientRepository.getUserInfo(username);

      this.authService.setCurrentUser(<CurrentUser>{
        username: username,
        apiKey: response.apiKey,
        name: userInfo.name,
        email: userInfo.email,
        id: userInfo.id
      });

      this.router.navigate(['/']);

    } else {
      alert(response.message);
    }

  }
}
