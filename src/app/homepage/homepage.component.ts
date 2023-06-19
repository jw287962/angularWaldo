import { Component, Input, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Images } from '../images/images';
import { imageList } from '../imageLists';
import { ImagesComponent } from '../images/images.component';
import { RouterModule } from '@angular/router';
import { ImageStateService } from '../services/image-state.service';

// import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, ImagesComponent, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(private _imageStateService: ImageStateService) {}
  @Input() image!: Images;
  imageList = imageList;

  // onSelectImage(e: Event) {
  //   e.preventDefault();
  //   this.imageStateService.setIndex(0);
  // }'
  setIndex(value: number): void {
    this._imageStateService.setIndex(value);
  }
}
