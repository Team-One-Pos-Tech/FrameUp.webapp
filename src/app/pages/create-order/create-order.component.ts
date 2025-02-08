import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import CreateOrderRequest, { ResolutionTypes } from '../../entities/create-order';
import { CommonModule } from '@angular/common';
import OrderRepository from '../../infra/repositories/order.repository';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
  imports: [ReactiveFormsModule, CommonModule, RouterModule]
})
export class CreateOrderComponent {
  constructor(private orderRepository: OrderRepository, private router: Router) { }

  resolutionTypes = Object.values(ResolutionTypes).filter(value => typeof value === 'string');

  orderForm = new FormGroup({
    captureInterval: new FormControl(0),
    exportResolution: new FormControl(ResolutionTypes.FullHD),
    videos: new FormArray([])
  });

  get videos(): FormArray {
    return this.orderForm.get('videos') as FormArray;
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.videos.push(new FormControl(files[i]));
    }
  }

  async onSubmit() {
    var orderRequest = new CreateOrderRequest()

    orderRequest.captureInterval = this.orderForm.value.captureInterval ?? 0;
    orderRequest.exportResolution = this.orderForm.value.exportResolution ?? ResolutionTypes.FullHD;
    orderRequest.videos = this.orderForm.value.videos ?? [];

    await this.orderRepository.createOrder(orderRequest);

    this.router.navigate(['']);
  }
}