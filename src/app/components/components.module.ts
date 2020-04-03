import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwiperComponent} from './swiper/swiper.component';
import {SwiperModule} from 'ngx-swiper-wrapper';



@NgModule({
  declarations: [SwiperComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [SwiperComponent]
})
export class ComponentsModule { }
