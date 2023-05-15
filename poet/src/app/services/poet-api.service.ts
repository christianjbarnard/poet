import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PoetApiService {

  constructor() { }

  // Calls basic /author endpoint
  getAuthorBasic() {
    return axios.get('https://poetrydb.org/author')
  }

  // Calls basic /title endpoint
  getTitleBasic() {
    return axios.get('https://poetrydb.org/title')
  }

  // Calls enhanced endpoint depending on search parameters
  getEnhanced(type: string, value: string) {
    return axios.get(`https://poetrydb.org/${type}/${value}`)
  }
}