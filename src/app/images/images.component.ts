import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Images } from './images';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent {
  @Input() image!: Images;
}
