import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetalisPage } from './movie-detalis.page';

const routes: Routes = [
  {
    path: '',
    component: MovieDetalisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDetalisPageRoutingModule {}
