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
   categorias = ['trabajo', 'estudio', 'casa', 'personal', 'finanzas', 'salud', 'viaje', 'social', 'tecnología'];
   estados = ['pendiente', 'en progreso', 'completada'];
   tarea: any = null;
 
   @ViewChild(MatTable) tabla1!: MatTable<Tarea>;
 
   constructor(private httpClient: HttpClient, private fb: FormBuilder,private service: TareaService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute,){
     this.datos = [];
     this.errorMessage = [];
   
   }

  ngOnInit() {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: [''],
      status: ['pendiente', Validators.required],
      fecha_de_vencimiento: [''],
      prioridad: [false],
      categoria: ['', Validators.required]
    });

    this.getActividades();
  }

  getActividades(){
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
 
  onEdit(id: number){
    this.service.getTask(id).subscribe({
      next: (response) => {
        console.log('detalle de Actividad:', response);
        this.tarea = response;
        this.taskId = response.id;
        this.form.patchValue(response);
      },
    });

  }

  onSubmit() {
    if (this.form.invalid) return;

    const task = this.form.value as Tarea;
    // console.log("valor de this.isEditMode:",this.isEditMode);
    
    if (this.tarea != null) {
      this.service.updateTask(this.taskId!, task).subscribe({
        next: (response) => {
          console.log('Elemento creado con éxito:', response);
          alert('Tarea actualizada con éxito ✅');
          this.getActividades();
          this.tarea = null;
          this.tabla1.renderRows();
          this.resetForm();
        },
        error: (error) => {
          this.errorMessage = error;
          console.error('Hubo un error al crear el elemento:', error);
        }
      });
     
    } else {
      this.service.createTask(task).subscribe({
        next: (response) => {
          console.log('Elemento creado con éxito:', response);
          alert('Tarea creada con éxito ✅');
          this.getActividades();
          this.tabla1.renderRows();
          this.resetForm();
        },
        error: (error) => {
          this.errorMessage = error;
          console.error('Hubo un error al crear el elemento:', error);
        }
      });
    }
  }

  resetForm() {
    this.form.reset();
  }


}
