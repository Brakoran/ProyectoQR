import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { MiqrComponent } from './auth/miqr/miqr.component';
import { PanelComponent } from './auth/panel/panel.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { LoginComponent } from './public/login/login.component';
import { RegistroComponent } from './public/registro/registro.component';
import { UsuarioComponent } from './public/usuario/usuario.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registro',
    component: RegistroComponent
  },
  {
    path:'usuario/:id',
    component:UsuarioComponent
  },
  {
    path:'panel',
    component:PanelComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path:'miqr',
    component: MiqrComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
