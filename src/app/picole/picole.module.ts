import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicolePageRoutingModule } from './picole-routing.module';

import { PicolePage } from './picole.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicolePageRoutingModule
  ],
  declarations: [PicolePage]
})
export class PicolePageModule {}
