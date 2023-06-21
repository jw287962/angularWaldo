import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageStateService } from '../services/image-state.service';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-navbarr',
  standalone: true,
  imports: [CommonModule, AppRoutingModule],
  templateUrl: './navbarr.component.html',
  styleUrls: ['./navbarr.component.css'],
})
export class NavbarrComponent {
  private _imageStateService: ImageStateService;
  constructor(imageStateService: ImageStateService) {
    this._imageStateService = imageStateService;
  }
  processReset() {
    this._imageStateService.resetFound();
  }
}
