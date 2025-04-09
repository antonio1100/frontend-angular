import { Component, ViewChild, OnInit} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
// import { ModalEditarComponent } from './modal-editar/modal-editar.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TareaService } from '../services/tarea.service';
import { Tarea } from '../interface/tarea';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabla-actividades',
  templateUrl: './tabla-actividades.component.html',
  styleUrls: ['./tabla-actividades.component.css']
})
export class TablaActividadesComponent {

   columnas: string[] = ['Titulo', 'Descripción', 'Estado', 'Fecha vencimiento','prioridad','categoria','acciones'];
   errorMessage: string[];
   datos:Tarea[];
   form!: FormGroup;
   isEditMode = false;
   taskId?: number;
   categories = ['trabajo', 'estudio', 'casa', 'personal', 'finanzas', 'salud', 'viaje', 'social', 'tecnología'];
   estados = ['pendiente', 'en progreso', 'completada'];
 
 
   @ViewChild(MatTable) tabla1!: MatTable<Tarea>;
 
   constructor(private httpClient: HttpClient, private fb: FormBuilder,private service: TareaService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute,){
     this.datos = [];
     this.errorMessage = [];
   
   }

   ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['pendiente', Validators.required],
      dueDate: [''],
      priority: [false],
      category: ['', Validators.required]
    });

    this.service.getTasks().subscribe((data: Tarea[])=>{
      this.datos = data;
      console.log(this.datos);
    })
  }

 
   onDelete(id: number){
     this.service.deleteTask(id).subscribe({
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
 
     this.service.getTask(id).subscribe({
       next: (response) => {
         console.log('detalle de Elemento  con éxito:', response);

        //  const dialogRef = this.dialog.open(ModalEditarComponent, {
        //    height: '400px',
        //    width: '600px',
        //    data:  response ,
     
        //  });
       },
     });
 
   }

   onSubmit() {
    if (this.form.invalid) return;

    const task = this.form.value as Tarea;

    if (this.isEditMode) {
      this.service.updateTask(this.taskId!, task).subscribe(() => this.router.navigate(['/actividades']));
    } else {
      this.service.createTask(task).subscribe(() => this.router.navigate(['/actividades']));
    }
  }



}
