import { Component, Input } from '@angular/core';
import { ImagesComponent } from './images/images.component';
import { Coordinates, Images, Character } from './images/images';
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
      name: 'Where is Waldo',
      characters: [
        new Character('Odlaw', [
          { x: 282 / 1200, y: 424 / 900 },
          { x: 282 / 1200, y: 495 / 900 },
          { x: 304 / 1200, y: 424 / 900 },
          { x: 304 / 1200, y: 495 / 900 },
        ]),
      ],
    },
    {
      url: '../assets/WhereisPikachu.jpeg',
      name: 'Where is Pikachu',
      characters: [],
    },
  ];
}
