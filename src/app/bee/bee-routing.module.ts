import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeePage } from './bee.page';

const routes: Routes = [
  {
    path: '',
    component: BeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeePageRoutingModule {}
