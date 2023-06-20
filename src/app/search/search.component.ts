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
  private _index: number = 0;
  private _toggle: Boolean = true;
  XYPage: Coordinates = { x: -Infinity, y: -Infinity };
  private _dropDown: HTMLElement = document.querySelector('.dropdownSearch')!;
  constructor(private imageStateService: ImageStateService) {}

  ngOnInit() {
    this.setIndex(this.imageStateService.getIndex());
    document.addEventListener('click', (e) => {
      if (e.target != document.querySelector('.searchImage')) {
        this._dropDown?.classList.add('hidden');
      }
    });
  }
  getIndex() {
    return this._index;
  }
  setIndex(value: number) {
    this._index = value;
  }

  processClickPosition(e: MouseEvent) {
    if (!this._dropDown) {
      this._dropDown = document.querySelector('.dropdownSearch')!;
    }

    this._dropDown.style.top = `${e.pageY}px`;
    this._dropDown.style.left = `${e.pageX}px`;
    this._dropDown.classList.remove('hidden');
    const image: Element = document.querySelector('.searchImage')!;

    const xRatio = e.offsetX / image.clientWidth;
    const yRatio = e.offsetY / image.clientHeight;
    this.XYPage = { x: xRatio, y: yRatio };

    this._toggle = !this._toggle;
  }

  processCharacterClickFinal(e: String) {
    const index = e as any;
    const character = imageList[this.getIndex()].characters[index * 1];
    if (
      this.XYPage.x > character.coordinates[0].x &&
      this.XYPage.x < character.coordinates[3].x &&
      this.XYPage.y > character.coordinates[0].y &&
      this.XYPage.y < character.coordinates[3].y
    ) {
      console.log('found');
    }
  }
}
