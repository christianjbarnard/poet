import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PoetApiService {

  constructor() { }

  getAuthorBasic() {
    return axios.get('https://poetrydb.org/author')
  }

  getTitleBasic() {
    return axios.get('https://poetrydb.org/title')
  }

  getEnhanced(type: string, value: string) {
    return axios.get(`https://poetrydb.org/${type}/${value}`)
  }
}