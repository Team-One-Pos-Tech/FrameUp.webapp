import { Component, Input } from '@angular/core';
import AuthenticationService, { CurrentUser } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentUser: CurrentUser | null = null;

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }
}
