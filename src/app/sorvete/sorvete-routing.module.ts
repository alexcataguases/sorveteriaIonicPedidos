import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SorvetePage } from './sorvete.page';

const routes: Routes = [
  {
    path: '',
    component: SorvetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SorvetePageRoutingModule {}
