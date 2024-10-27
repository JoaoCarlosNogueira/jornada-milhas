import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PessoaUsuario } from '../types/type';
import { TokenService } from './token.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<PessoaUsuario | null>(null);
  
  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificarJWT();
    }
   }

   decodificarJWT(){
    const token = this.tokenService.retornarToken();
    const user = jwtDecode(token) as PessoaUsuario;
    this.userSubject.next(user)
   }

   retornaUser(){
    return this.userSubject.asObservable();
   }

   salvarToken(token:string ){
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
   }

   logout(){
    this.tokenService.exlcluirToken();
    this.userSubject.next(null);
   }

   estaLogado(){
    return this.tokenService.possuiToken();
   }

}
