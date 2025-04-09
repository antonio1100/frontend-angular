import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaUsuariosComponent } from './usuarios/tabla-usuarios/tabla-usuarios.component';
import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaActividadesComponent } from './tabla-actividades/tabla-actividades.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaUsuariosComponent,
    LoginComponent,
    BarraLateralComponent,
    TablaActividadesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule ,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
