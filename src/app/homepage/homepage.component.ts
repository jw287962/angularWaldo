import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Images } from '../images/images';
import { imageList } from '../imageLists';
import { ImagesComponent } from '../images/images.component';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, ImagesComponent, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  @Input() image!: Images;
  imageList = imageList;
}
