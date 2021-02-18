import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AllComponent } from './pages/all/all.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { CreateComponent } from './pages/create/create.component';
import { SingleComponent } from './pages/single/single.component';
import { ModifyComponent } from './pages/modify/modify.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all',
        component: AllComponent,
      },
      {
        canActivate: [AuthGuard],
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'single/:id',
        component: SingleComponent,
      },
      {
        path: 'categoria/:categoria',
        component: CategoriaComponent,
      },
      {
        canActivate: [AuthGuard],
        path: 'modify/:id',
        component: ModifyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasRoutingModule {}
