import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncomendasPage } from './encomendas.page';

const routes: Routes = [
  {
    path: '',
    component: EncomendasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncomendasPageRoutingModule {}
