import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SorvetePageRoutingModule } from './sorvete-routing.module';

import { SorvetePage } from './sorvete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SorvetePageRoutingModule
  ],
  declarations: [SorvetePage]
})
export class SorvetePageModule {}
