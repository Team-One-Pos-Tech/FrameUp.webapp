import { Component, OnInit } from '@angular/core';
import AuthenticationService, { CurrentUser } from '../../services/authentication.service';
import OrderRepository from '../../infra/repositories/order.repository';
import Order from '../../entities/order.model';
import { OrderListComponent } from '../../components/order-list/order-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [OrderListComponent, CommonModule, RouterModule]
})
export class HomeComponent implements OnInit {
  currentUser: CurrentUser | null = null;
  orderList: Order[] = [];

  constructor(
    private authService: AuthenticationService,
    private orderRepository: OrderRepository
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();

    this.loadOrders();
  }

  async loadOrders() {
    this.orderList = await this.orderRepository.getOrders();
  }
}