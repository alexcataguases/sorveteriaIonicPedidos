import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicolePage } from './picole.page';

const routes: Routes = [
  {
    path: '',
    component: PicolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicolePageRoutingModule {}
