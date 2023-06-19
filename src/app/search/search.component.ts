import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageStateService } from '../services/image-state.service';
import { imageList } from '../imageLists';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  // @Input() image!: Images;
  imageList = imageList;
  index: number = 0;
  constructor(private imageStateService: ImageStateService) {}

  ngOnInit() {
    this.index = this.imageStateService.getIndex();
  }
  getIndex() {
    return this.index;
  }
}
