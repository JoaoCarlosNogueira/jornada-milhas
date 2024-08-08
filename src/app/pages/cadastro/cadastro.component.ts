import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { PessoaUsuario } from 'src/app/core/types/type';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
 perfilComponent = false;
 
 constructor(private formularioService: FormularioService, private cadastroService: CadastroService, private router: Router){}

  cadastrar(){ 
   const cadastro = this.formularioService.getCadastro()
   
   if(cadastro?.valid){
     const novoCadastro = cadastro.getRawValue() as PessoaUsuario;
     console.log(novoCadastro)

     this.cadastroService.cadastrar(novoCadastro).subscribe({
      next: (value) =>{
        console.log('Cadastro realizado com Sucesso',value);
        this.router.navigate(['/login']);
      },
      error: (error) =>{
        console.log("Erro ao realizar o cadastro",error)
      }
        
     })
   }

  }


}
