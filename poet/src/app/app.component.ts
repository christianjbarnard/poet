import { Component } from '@angular/core';
import { PoetApiService } from './services/poet-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private poetApiService: PoetApiService) {}
}
