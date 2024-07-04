import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {
 formBusca: FormGroup;
  constructor(private dialog: MatDialog) { 
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      tipo : new FormControl("Executiva"),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
      quantidadeAdulto: new FormControl(0),
      quantidadeCrianca: new FormControl(0),
      quantidadeBebe: new FormControl(0),

    })
  } 

  obterControle(nome:string):FormControl{
    const control = this.formBusca.get(nome);
    if (!control){
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    
    return control as FormControl;
  } 
  
  getDescricaoPassageiros() : string{
    let descricao = ''
    
    const adultos = this.formBusca.get('adultos')?.value

    if(adultos > 0 ){
      descricao += '' 
    } 

    return descricao
  }

  openDialog() {
    this.dialog.open(ModalComponent)
      width: '50%'
  }
  
  alterarTipo(evento: MatChipSelectionChange, tipo: string){
    if(evento.selected){
      this.formBusca.patchValue({
        tipo,
      })
    } 
    console.log("evento alterado para " + tipo)
  } 

  calculaQuantidade(evento: Event): void{ 
    
    let quantidade = this.formBusca.get('quantidadeAdulto')?.value + 1
    this.formBusca.get('quantidadeAdulto')?.setValue(quantidade)
    
    console.log(this.formBusca.get('quantidadeAdulto') + "oiiii")
  }
  
}
