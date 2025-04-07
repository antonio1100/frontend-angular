import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api-service';


@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.css']
})
export class ModalEditarComponent {

  
  constructor(private service: ApiService, private dialogRef: MatDialogRef<ModalEditarComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    console.log("modal editar => ",this.data);
    
  }

  // onDelete(){
  //   this.service.showItem(id).subscribe({
  //     next: (response) => {
  //       console.log('Elemento eliminado con éxito:', response);
  //       this.datos = this.datos.filter(elemento => elemento.id !== id);
  //       this.tabla1.renderRows();
  //     },
  //     error: (error) => {
  //       this.errorMessage = error;
  //       console.error('Hubo un error al eliminar el elemento:', error);
  //     }
  //   });
  // }
  update(){}

  close(): void {
    this.dialogRef.close();
  }

}
