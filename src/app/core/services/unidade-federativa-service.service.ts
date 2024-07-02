import { Injectable } from '@angular/core';
import { Observable, share, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UnidadeFederativa } from '../types/type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaServiceService {
  private apiUrl: string = environment.apiUrl
  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(
    private http: HttpClient
  ) { }

  listar() : Observable<UnidadeFederativa[]>{
    
    if(!this.cache$){
     this.cache$ = this.requestEstados().pipe(
      shareReplay(1)
     );
    }
    return this.cache$;
  }

  private requestEstados(): Observable<UnidadeFederativa[]>{
    return this.http.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`);
  }

}
