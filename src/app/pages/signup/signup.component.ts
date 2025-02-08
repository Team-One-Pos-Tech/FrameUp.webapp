import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import AuthRepository from '../../infra/repositories/auth.repository';
import AuthenticationService from '../../services/authentication.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(
    private router: Router,
    private authRepository: AuthRepository,
    private authService: AuthenticationService
  ) {}

  signupForm = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
  });

  async signup() {
    const username = this.signupForm.value.username;
    const name = this.signupForm.value.name;
    const email = this.signupForm.value.email;

    var response = await this.authRepository.signup({
      username: username as string,
      name: name as string,
      email: email as string
    });

    if (response.isValid) {
      alert('User created successfully!');

      this.router.navigate(['/login']);
    } else {
      alert(response.message);
    }
  }
}
