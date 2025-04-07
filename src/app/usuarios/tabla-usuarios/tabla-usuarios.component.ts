import { Component, ViewChild, OnInit} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ApiService } from 'src/app/services/api-service';
import { User } from 'src/app/interface/user';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditarComponent } from './modal-editar/modal-editar.component';



@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})


export class TablaUsuariosComponent implements OnInit{
  private apiURL = "http://localhost/PRUEBA-CAPI/capi_examen_back_Antonio_Avila/public/api/";
  columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];
  errorMessage: string[];
  datos:User[];


  @ViewChild(MatTable) tabla1!: MatTable<User>;

  constructor(private httpClient: HttpClient, private service: ApiService, public dialog: MatDialog, private route: Router){
    this.datos = [];
    this.errorMessage = [];
  
  }

  ngOnInit(): void {

    this.service.getAll().subscribe((data: User[])=>{
      this.datos = data;
      console.log(this.datos);
    })
  }

  onDelete(id: number){
    this.service.deleteItem(id).subscribe({
      next: (response) => {
        console.log('Elemento eliminado con éxito:', response);
        this.datos = this.datos.filter(elemento => elemento.id !== id);
        this.tabla1.renderRows();
      },
      error: (error) => {
        this.errorMessage = error;
        console.error('Hubo un error al eliminar el elemento:', error);
      }
    });
  }

  openModal() {
    // const dialogRef = this.dialog.open(ModalComponent, {
    //   data: { message: 'Hola desde el botón!' },
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('El modal se cerró');
    // });
  }

  onEdit(id: number){

     let detalleItem = {};
    // return this.httpClient.get(`${this.apiURL}producto/${id}`);
    // console.log("variable detalleItem",detalleItem);

    this.service.showItem(id).subscribe({
      next: (response) => {
        console.log('detalle de Elemento  con éxito:', response);

        const dialogRef = this.dialog.open(ModalEditarComponent, {
          height: '400px',
          width: '600px',
          data:  response ,
    
        });
      },
      // this.datos = data;
      // console.log(this.datos);
    });

   

  }

}

