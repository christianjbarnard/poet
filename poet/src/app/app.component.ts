import { Component } from '@angular/core';
import { PoetApiService } from './services/poet-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poet';
  basicAuthor = "";
  basicTitle = "";

  constructor(private poetApiService: PoetApiService) {}

  async getAuthors() {
    const result = await this.poetApiService.getAuthorBasic()
    console.log(result);
    if (result.status == 200) {
      this.basicAuthor = JSON.stringify(result, null, 2)
    }
    else (
      alert("Error on Author request: " + result.statusText)
    )
  }

  async getTitles() {
    const result = await this.poetApiService.getTitleBasic()
    console.log(result)
    if (result.status == 200) {
      this.basicTitle = JSON.stringify(result, null, 2)
    }
    else (
      alert("Error on Title request: " + result.statusText)
    )
  }
}