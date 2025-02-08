import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import CreateOrderRequest, { ResolutionTypes } from '../../entities/create-order';
import { CommonModule } from '@angular/common';
import OrderRepository from '../../infra/repositories/order.repository';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
  imports: [ReactiveFormsModule, CommonModule, RouterModule, HeaderComponent]
})
export class CreateOrderComponent {
  constructor(private orderRepository: OrderRepository, private router: Router) { }

  resolutionTypes = Object.values(ResolutionTypes).filter(value => typeof value === 'string');

  uploading = false;

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
    this.uploading = true;

    var orderRequest = new CreateOrderRequest()

    orderRequest.captureInterval = this.orderForm.value.captureInterval ?? 0;
    orderRequest.exportResolution = this.orderForm.value.exportResolution ?? ResolutionTypes.FullHD;
    orderRequest.videos = this.orderForm.value.videos ?? [];

    const response = await this.orderRepository.createOrder(orderRequest);

    if (!response) {
      alert('Failed to create order');
      this.uploading = false;

      return;
    } 
    
    this.uploading = false;

    this.router.navigate(['']);
  }
}