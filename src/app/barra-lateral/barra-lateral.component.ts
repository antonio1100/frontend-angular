import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api-service';
import { User } from 'src/app/interface/user';
import { Router } from "@angular/router";

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent {
  private breakpointObserver = inject(BreakpointObserver);
  datos:User[];
  errorMessage: string[];

    constructor( private service: ApiService, public router: Router){
      this.datos = [];
      this.errorMessage = [];
    }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    cerrarSesion(){
      this.service.logout().subscribe({
        next: (response) => {
          console.log('Sesion cerrada correctamente');
          this.router.navigateByUrl("login");
        },
        error: (error) => {
          this.errorMessage = error;
          console.error('Hubo un error al eliminar el elemento:', error);
        }
      });
    }
}
