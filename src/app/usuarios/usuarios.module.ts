import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { ModalEditarComponent } from './tabla-usuarios/modal-editar/modal-editar.component';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TablaUsuariosComponent,
    ModalEditarComponent,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule  
  ],
  exports: [TablaUsuariosComponent],
  imports: [
    CommonModule,
  
  
  ]
})
export class UsuariosModule { }
