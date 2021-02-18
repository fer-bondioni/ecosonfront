import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './features/auth/auth.guard';
// const coreModule = () =>
//   import('./features/core/core.module').then((m) => m.CoreModule);
const homeModule = () =>
  import('./features/home/home.module').then((m) => m.HomeModule);
const usersModule = () =>
  import('./features/users/users.module').then((m) => m.UsersModule);
const noticiasModule = () =>
  import('./features/noticias/noticias.module').then((m) => m.NoticiasModule);
const categoriasModule = () =>
  import('./features/categorias/categorias.module').then(
    (m) => m.CategoriasModule
  );
const pipesModule = () =>
  import('./features/pipes/pipes.module').then((m) => m.PipesModule);
// cuando se solicita una ruta -> módulo

// docentes
const routes: Routes = [
  { path: 'home', loadChildren: homeModule },
  { path: 'noticias', loadChildren: noticiasModule },
  { path: 'categorias', loadChildren: categoriasModule },
  { path: 'users', loadChildren: usersModule },
  { path: 'pipes', loadChildren: pipesModule },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
