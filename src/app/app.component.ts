import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
    console.log(`${environment.production ? 'Production' : 'Development'} mode`);
  }
}
