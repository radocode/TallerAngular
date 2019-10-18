import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  SERVER_URL: string = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) { }

  public traerHola(): string {
    const resultado = 'hola';
    return resultado;
    // return 'hola';
  }

  public getPersonas() {
    return this.httpClient.get(this.SERVER_URL + 'personas');
  }

  public deletePersona(id: any) {
    return this.httpClient.delete(`${this.SERVER_URL + 'personas'}/${id}`);
    // return this.httpClient.delete(this.SERVER_URL + 'personas/'+id);
  }

  public updatePersona(persona: {id: number, nombre: string}) {
    return this.httpClient.put(`${this.SERVER_URL + 'personas'}/${persona.id}`, persona);
  }

  public createPersona(persona: {id: number, nombre: string}) {
    return this.httpClient.post(`${this.SERVER_URL + 'personas'}`, persona);
  }

}
