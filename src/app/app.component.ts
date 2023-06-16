import { Component, Input } from '@angular/core';
import { ImagesComponent } from './images/images.component';
import { Images } from './images/images';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myApp';

  imageList: Images[] = [
    {
      url: '../assets/WhereisWaldo.png',
      name: 'Waldo',
    },
    {
      url: '../assets/WhereisPikachu.jpeg',
      name: 'Pikachu',
    },
  ];
}
