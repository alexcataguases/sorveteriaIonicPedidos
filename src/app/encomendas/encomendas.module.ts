import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { EncomendasPageRoutingModule } from './encomendas-routing.module';

import { EncomendasPage } from './encomendas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncomendasPageRoutingModule
  ],
  declarations: [EncomendasPage]
})
export class EncomendasPageModule {}
