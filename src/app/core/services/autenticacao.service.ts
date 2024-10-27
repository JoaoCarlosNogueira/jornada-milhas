import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserService } from './user.service';

interface AuthResponse{
  acces_token: string;
}
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiUrl = environment.apiUrl;

  constructor(private htttp: HttpClient,
    private userService : UserService
  ) {

   }

   autenticar(email: string, senha:string): Observable<HttpResponse<AuthResponse>>{
    return this.htttp.post<AuthResponse>(`${this.apiUrl}/auth/login`,
      {email,senha},
      {observe: 'response'}).pipe(
        tap(response =>{
          const authtoken = response.body?.acces_token || '';
          this.userService.salvarToken(authtoken)
        })
      )
   }
}
