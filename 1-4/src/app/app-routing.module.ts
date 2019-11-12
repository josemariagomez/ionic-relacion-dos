import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'ej1', loadChildren: './pages/ej1/ej1.module#Ej1PageModule' },
  { path: 'ej2', loadChildren: './pages/ej2/ej2.module#Ej2PageModule' },
  { path: 'ej3', loadChildren: './pages/ej3/ej3.module#Ej3PageModule' },
  { path: 'add', loadChildren: './pages/add/add.module#AddPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
