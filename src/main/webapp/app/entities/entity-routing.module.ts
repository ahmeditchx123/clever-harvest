import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'clever-harvest',
        loadChildren: () => import('./clever-harvest/clever-harvest.module').then(m => m.CleverHarvestModule),
      },
    ]),
  ],
})
export class EntityRoutingModule {}
