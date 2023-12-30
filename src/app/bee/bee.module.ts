import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeePageRoutingModule } from './bee-routing.module';

import { BeePage } from './bee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeePageRoutingModule
  ],
  declarations: [BeePage]
})
export class BeePageModule {}
