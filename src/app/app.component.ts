import { Component, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
// import { ImagesComponent } from './images/images.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Find';
}
