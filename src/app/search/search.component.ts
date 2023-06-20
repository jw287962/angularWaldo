import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageStateService } from '../services/image-state.service';
import { imageList } from '../imageLists';
import { CharacterDropDownComponent } from '../character-drop-down/character-drop-down.component';
import { Coordinates } from '../images/images';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, CharacterDropDownComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  // @Input() image!: Images;
  imageList = imageList;
  index: number = 0;
  private _toggle: Boolean = true;
  XYPage: Coordinates = { x: -Infinity, y: -Infinity };
  private _dropDown: HTMLElement = document.querySelector('.dropdownSearch')!;
  constructor(private imageStateService: ImageStateService) {}

  ngOnInit() {
    this.index = this.imageStateService.getIndex();
    document.addEventListener('click', (e) => {
      if (e.target != document.querySelector('.searchImage')) {
        this._dropDown?.classList.add('hidden');
      }
    });
  }
  getIndex() {
    return this.index;
  }

  processClickPosition(e: MouseEvent) {
    if (!this._dropDown) {
      this._dropDown = document.querySelector('.dropdownSearch')!;
    }
    this.XYPage = { x: e.pageX, y: e.pageY };

    this._dropDown.style.top = `${this.XYPage.y}px`;
    this._dropDown.style.left = `${this.XYPage.x}px`;
    this._dropDown.classList.remove('hidden');
    const image: Element = document.querySelector('.searchImage')!;

    const xRatio = e.offsetX / image.clientWidth;
    const yRatio = e.offsetY / image.clientHeight;
    console.log(xRatio, yRatio);
    this._toggle = !this._toggle;
  }
}
