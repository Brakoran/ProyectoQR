import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    RegistroComponent,
    LoginComponent
  ]
})
export class PublicModule { }
