import { Component } from '@angular/core';
import { FormularioService } from 'src/app/core/services/formulario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
 perfilComponent = false;
 
 constructor(private formularioService: FormularioService){}

  cadastrar(){ 
   this.formularioService.getCadastro    
  console.log("Cadastro Realizado com sucesso")
  }


}
