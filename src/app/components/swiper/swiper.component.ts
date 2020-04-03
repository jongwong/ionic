import { Component, OnInit } from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';



@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements OnInit {
  index = 0;
  imgs: Array<string> = [
      '../../../assets/imgs/1.jpg',
    '../../../assets/imgs/2.jpg',
    '../../../assets/imgs/3.jpg',
    '../../../assets/imgs/4.jpg',
    '../../../assets/imgs/5.jpg',
    '../../../assets/imgs/6.jpg',
  ];
  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
  };

  constructor() { }

  ngOnInit() {}

}
