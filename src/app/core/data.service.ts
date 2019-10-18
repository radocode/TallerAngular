import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const personas = [
      {
        id: 1,
        nombre: 'persona 1'
      },
      {
        id: 2,
        nombre: 'persona 2'
      },
      {
        id: 3,
        nombre: 'persona 3'
      },
      {
        id: 4,
        nombre: 'persona 4'
      },
      {
        id: 5,
        nombre: 'persona 5'
      },
    ];
    return {personas};
  }
}
