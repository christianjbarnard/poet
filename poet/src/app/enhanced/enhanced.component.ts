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

  // Method to make call to the API with the form data. Displays data when received.
  async onClickSubmit(data: any) {

    // Throw alert if fields are empty
    if (data.type === undefined || data.type === '' || data.type === undefined || data.type === '') {
      alert("Must fill out all fields.")
    }
    else {
      // Get data from API service
      const result = await this.poetApiService.getEnhanced(data.type, data.value)

      // Format and show result on page
      if (result.status == 200 && result.data.status != '404') {
        this.result = JSON.stringify({
          'data': result.data,
        }, null, 2)
      }
      // Throw alert if error on request
      else (
        alert("Error on request: Invalid value")
      )
    }
  }
}
