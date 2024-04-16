import { Component, Input, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 constructor( private servicoPromocao: PromocaoService) { 
 } 
 
 promocoes: any[] = []
 
  ngOnInit(): void {
   this.servicoPromocao.listar()
    .subscribe(
      promocoes=> this.promocoes.push(promocoes) 
    // resposta=>
      //console.log(resposta)  
    )
  }
}
