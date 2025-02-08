import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ResolutionTypes } from '../../entities/create-order';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class CreateOrderComponent {
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
  
    onSubmit() {
      console.log(this.orderForm.value);
    }
}