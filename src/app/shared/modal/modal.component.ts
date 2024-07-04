import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(public formBuscaService: FormBuscaService, public dialog: MatDialog){}
  
  openDialog() {
    this.dialog.open(ModalComponent)
      
  }
}
