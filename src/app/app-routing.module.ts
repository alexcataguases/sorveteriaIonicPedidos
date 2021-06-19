import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicial',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicial',
    loadChildren: () => import('./inicial/inicial.module').then( m => m.InicialPageModule)
  },
  {
    path: 'acai',
    loadChildren: () => import('./acai/acai.module').then( m => m.AcaiPageModule)
  },
  {
    path: 'sorvete',
    loadChildren: () => import('./sorvete/sorvete.module').then( m => m.SorvetePageModule)
  },
  {
    path: 'picole',
    loadChildren: () => import('./picole/picole.module').then( m => m.PicolePageModule)
  },
  {
    path: 'encomendas',
    loadChildren: () => import('./encomendas/encomendas.module').then( m => m.EncomendasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
