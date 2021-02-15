import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AllComponent } from './pages/all/all.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { CreateComponent } from './pages/create/create.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all',
        component: AllComponent,
      },
      {
        canActivateChild: [AuthGuard],
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasRoutingModule {}
