import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcaiPageRoutingModule } from './acai-routing.module';

import { AcaiPage } from './acai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcaiPageRoutingModule
  ],
  declarations: [AcaiPage]
})
export class AcaiPageModule {}
