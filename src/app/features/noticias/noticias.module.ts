import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './noticias.component';
import { AllComponent } from './pages/all/all.component';
import { CreateComponent } from './pages/create/create.component';
import { SingleComponent } from './pages/single/single.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NoticiasComponent,
    AllComponent,
    CreateComponent,
    SingleComponent,
    CategoriaComponent,
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports: [AllComponent, CreateComponent, NoticiasComponent, SingleComponent],
})
export class NoticiasModule {}
