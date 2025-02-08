import { Component, OnInit } from '@angular/core';
import AuthenticationService, { CurrentUser } from '../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: CurrentUser | null = null;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }
}