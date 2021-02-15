import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './pages/perfil/perfil.component';

@NgModule({
  declarations: [
    UsersComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [UsersComponent, LoginComponent, RegistroComponent, PerfilComponent],
})
export class UsersModule {}
