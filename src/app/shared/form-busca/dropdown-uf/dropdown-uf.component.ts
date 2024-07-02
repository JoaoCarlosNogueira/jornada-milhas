import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { UnidadeFederativaServiceService } from 'src/app/core/services/unidade-federativa-service.service';
import { UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
   @Input() label: string = '';
   @Input() iconePrefixo: string = '';
   @Input() control!: FormControl;
   
   unidadesFederativas: UnidadeFederativa[] = [];

   filteredOptions$?: Observable<UnidadeFederativa[]>;

  constructor(private unidadeFederativaService: UnidadeFederativaServiceService){

  }
  
  ngOnInit(): void {
    this.unidadeFederativaService.listar()
    .subscribe(dados =>{
     this.unidadesFederativas = dados
     console.log(this.unidadesFederativas)
    }) 
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value=> this.filtrarUfs(value))
    )
  } 

  filtrarUfs(value: string): UnidadeFederativa[]{
    const valorFiltrado = value?.toLowerCase();
    const result = this.unidadesFederativas.filter(
      estado=> estado.nome.toLowerCase().includes(valorFiltrado)
    )
    return result;
  }

}
