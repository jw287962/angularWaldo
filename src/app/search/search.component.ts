import { Component, Input } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { ImageStateService } from '../services/image-state.service';
import { imageList } from '../imageLists';
import { CharacterDropDownComponent } from '../character-drop-down/character-drop-down.component';
import { Character, Coordinates } from '../images/images';

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
  timer = { minutes: 0, seconds: 0 };
  private _intervalTimer: ReturnType<typeof setInterval>;

  constructor(private imageStateService: ImageStateService) {
    this._intervalTimer = setInterval(() => {
      this.timer.seconds++;
      if (this.timer.seconds === 60) {
        this.timer.minutes++;
        this.timer.seconds = 0;
      }
    }, 1000);
  }

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
    const image: Element = document.querySelector('.searchImage')!;

    const xRatio = e.offsetX / image.clientWidth;
    const yRatio = e.offsetY / image.clientHeight;
    if (xRatio > 0.7) {
      this._dropDown.style.left = `${e.pageX - this._dropDown.clientWidth}px`;
    } else {
      this._dropDown.style.left = `${e.pageX}px`;
    }
    this._dropDown.style.top = `${e.pageY}px`;
    this._dropDown.classList.remove('hidden');

    this.XYPage = { x: xRatio, y: yRatio };

    this._toggle = !this._toggle;
  }

  processCharacterClickFinal(e: String) {
    const i = e as any;
    const character =
      this.imageStateService.getImageLists()[this.getIndex()].characters;
    if (
      this.XYPage.x > character[i * 1].coordinates[0].x &&
      this.XYPage.x < character[i * 1].coordinates[3].x &&
      this.XYPage.y > character[i * 1].coordinates[0].y &&
      this.XYPage.y < character[i * 1].coordinates[3].y
    ) {
      character[i * 1].found();
    }

    const foundFalse = character.find((ele) => ele.isFound === false);
    if (!foundFalse) {
      clearInterval(this._intervalTimer);
    }
  }

  resetTimer() {
    this.timer = { minutes: 0, seconds: 0 };
  }
}
