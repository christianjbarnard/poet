import { Component } from '@angular/core';
import { PoetApiService } from '../services/poet-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './enhanced.component.html',
  styleUrls: ['../../styles.css']
})
export class EnhancedComponent {
  result = '';

  constructor(private poetApiService: PoetApiService) {}

  async onClickSubmit(data: any) {
    console.log(data);
    const result = await this.poetApiService.getEnhanced(data.type, data.value)
    if (result.status == 200 && result.data.status != '404') {
      this.result = JSON.stringify({
        'data': result.data,
      }, null, 2)
    }
    else (
      alert("Error on request: Invalid value")
    )
  }
}
