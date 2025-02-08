import { Component, OnInit } from '@angular/core';
import AuthenticationService, { CurrentUser } from '../../services/authentication.service';
import OrderRepository from '../../infra/repositories/order.repository';
import Order from '../../entities/order.model';
import { OrderListComponent } from '../../components/order-list/order-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [OrderListComponent, CommonModule, RouterModule, HeaderComponent]
})
export class HomeComponent implements OnInit {
  currentUser: CurrentUser | null = null;
  orderList: Order[] = [];

  constructor(
    private orderRepository: OrderRepository
  ) {}

  ngOnInit() {
    this.loadOrders();
  }

  async loadOrders() {
    this.orderList = await this.orderRepository.getOrders();
  }
}