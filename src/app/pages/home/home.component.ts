import { Component, OnInit } from '@angular/core';
import AuthenticationService, { CurrentUser } from '../../services/authentication.service';
import OrderRepository from '../../infra/repositories/order.repository';
import Order from '../../entities/order.model';
import { OrderListComponent } from '../../components/order-list/order-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [OrderListComponent]
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
    let orders = await this.orderRepository.getOrders();
  }
}