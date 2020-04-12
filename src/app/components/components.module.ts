import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper/swiper.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SwiperComponent],
  imports: [CommonModule, SwiperModule, IonicModule],
  exports: [SwiperComponent],
})
export class ComponentsModule {}
