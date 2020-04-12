import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listimgs = [
    '../../../assets/imgs2/01.jpg',
    '../../../assets/imgs2/02.jpg',
    '../../../assets/imgs2/03.jpg',
    '../../../assets/imgs2/04.jpg',
    '../../../assets/imgs2/05.jpg',
    '../../../assets/imgs2/06.jpg',
    '../../../assets/imgs2/07.jpg',
    '../../../assets/imgs2/08.jpg',
    '../../../assets/imgs2/09.jpg'
  ];
  constructor() {}

}
