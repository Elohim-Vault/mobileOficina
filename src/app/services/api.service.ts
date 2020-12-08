import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string = 'http://localhost/oficinaAPI/public/api';
  constructor(private http: HttpClient) { }

  readData() {
    return this.http.get(`${this.api}/servicos`);
  }

  done(data) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(data);
    console.log(data);
    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
     };

    fetch(`http://localhost/oficinaAPI/public/api/servicos/${data.IdServico}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
}
