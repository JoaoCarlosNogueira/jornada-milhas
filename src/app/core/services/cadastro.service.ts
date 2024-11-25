import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.httpClient.post<PessoaUsuario>(`${this.apiUrl}/auth/cadastro`,pessoa)
   } 

   Buscarcadastro(token: string): Observable<PessoaUsuario>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.get<PessoaUsuario>(`${this.apiUrl}/auth/perfil`,{headers})
   }
   
   Editarcadastro( pessoaUsuario: PessoaUsuario, token: string): Observable<PessoaUsuario>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.patch<PessoaUsuario>(`${this.apiUrl}/auth/perfil`, pessoaUsuario, {headers})
   }

}
