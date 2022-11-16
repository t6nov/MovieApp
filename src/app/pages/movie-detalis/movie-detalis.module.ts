import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetalisPageRoutingModule } from './movie-detalis-routing.module';

import { MovieDetalisPage } from './movie-detalis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetalisPageRoutingModule
  ],
  declarations: [MovieDetalisPage]
})
export class MovieDetalisPageModule {}
