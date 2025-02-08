import { Component, Input } from '@angular/core';
import Order from '../../entities/order.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  imports: [CommonModule]
})
export class OrderListComponent {
  @Input() orderModelList: Order[];

  constructor() {
    this.orderModelList = [];
  }
}
