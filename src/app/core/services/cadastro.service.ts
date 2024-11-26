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
  constructor(private httpClient: HttpClient) { }

   cadastrar(pessoa: PessoaUsuario): Observable<PessoaUsuario>{
    return this.httpClient.post<PessoaUsuario>(`${this.apiUrl}/auth/cadastro`,pessoa)
   } 

   buscarcadastro(): Observable<PessoaUsuario>{
    return this.httpClient.get<PessoaUsuario>(`${this.apiUrl}/auth/perfil`)
   }
   
   editarcadastro(pessoaUsuario: PessoaUsuario): Observable<PessoaUsuario>{
    return this.httpClient.patch<PessoaUsuario>(`${this.apiUrl}/auth/perfil`, pessoaUsuario)
   }

}
