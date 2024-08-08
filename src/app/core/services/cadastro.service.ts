import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { PessoaUsuario } from '../types/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) {

   }

   cadastrar(pessoa: PessoaUsuario): Observable<PessoaUsuario>{
    return this.httpClient.post<PessoaUsuario>(`${this.apiUrl}/auth/login`,{pessoa})
   }

}
