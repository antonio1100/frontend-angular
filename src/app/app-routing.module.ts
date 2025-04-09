import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { TablaUsuariosComponent } from './usuarios/tabla-usuarios/tabla-usuarios.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { TablaActividadesComponent } from './tabla-actividades/tabla-actividades.component';


const appRoutes: Routes = [
  // { path: "", component: AppComponent, pathMatch: "full" },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'navbar', component: BarraLateralComponent, pathMatch: 'full' },
  { path: 'actividades', component: TablaActividadesComponent, pathMatch: 'full' },
  { path: 'usuarios', component: TablaUsuariosComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

