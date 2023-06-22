import {
  Component,
  Input,
  ViewEncapsulation,
  numberAttribute,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Images } from '../images/images';
import { imageList } from '../imageLists';
import { ImagesComponent } from '../images/images.component';
import { RouterModule, Router } from '@angular/router';
import { ImageStateService } from '../services/image-state.service';

// import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, ImagesComponent, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomepageComponent {
  constructor(
    private _imageStateService: ImageStateService,
    private router: Router
  ) {}
  @Input() image!: Images;
  imageList = imageList;
  startingRound = false;

  // onSelectImage(e: Event) {
  //   e.preventDefault();
  //   this.imageStateService.setIndex(0);
  // }'
  processStartingGame(e: Event): void {
    e.preventDefault();

    this._imageStateService.setIndex(this.getIndex());
    this.router.navigate(['searchImager']);
  }
  setIndex(val: number): void {
    this._imageStateService.setIndex(val);
  }
  getIndex(): number {
    return this._imageStateService.getIndex();
  }

  previousImage() {
    const value = this.getIndex() - 1;
    this.setIndex(
      value < 0 ? this._imageStateService.getImageLists().length - 1 : value
    );
  }
  nextImage() {
    const value = this.getIndex() + 1;
    this.setIndex(
      value > this._imageStateService.getImageLists().length - 1 ? 0 : value
    );
  }
}
