# Mi Proyecto Laravel/Angular

Este es un proyecto de administración de tareas utilizando Angular material y css. Incluye autenticación mediante login, al ingresar al sistema se visualiza una barra de navegacion la cual tiene las opciones de actividades, que al darle click mostrara la tabla de las actividades creadas y un pequeño formulario para la creacion de actividades, si damos click a la opcion de usuarios nos mostrara el componente tabla de los usuarios creados, la opcion de eliminar funciona, la opcion de editar solo hace la peticion al endpoint y trae los datos pero solo abre un modal y muestra el id del registro en la BD.

cuenta con cierre de sesion.


## Instalación

1. Clona el repositorio:
   ```bash
   git clone git@github.com:antonio1100/frontend-angular.git   o  git clone https://github.com/antonio1100/frontend-angular.git

2. Instala las dependencias:
     npm install
3. despues de instalar las dependencias correr el comando ng serve para levantar el servicio, si no reconoce "ng" correr el comando npm run start, si no jala hay que hacer lo del paso numero 4
4. Para instalar Angular CLI, necesitas: 
     Instalar Node.js (yo descargue la version v20.10.0 y la descomprimi en mi carpeta bin/node de laragon)
     Instalar npm, el gestor de paquetes de Node.js

     Una vez que tengas Node.js y npm instalados, puedes instalar Angular CLI con el comando npm install -g @angular/cli.

5. Ejecuta el servicio:
     ng serve


# CapiExamenFrontAntonioAvila

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
