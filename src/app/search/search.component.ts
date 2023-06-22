import { Component, Input, DoCheck, SimpleChanges } from '@angular/core';
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
export class SearchComponent implements DoCheck {
  // @Input() image!: Images;
  private _index: number = 0;
  private _dropDown: HTMLElement = document.querySelector('.dropdownSearch')!;
  private _intervalTimer: ReturnType<typeof setInterval>;

  imageList = imageList;
  private _XYPage: Coordinates = { x: -Infinity, y: -Infinity };
  timer = { minutes: 0, seconds: 0 };
  tobeFoundRemaining: number = 0;
  noticeText: string = '';
  hasChangedText: boolean = false;
  currentTimeout!: ReturnType<typeof setTimeout>;
  ngDoCheck(): void {}
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
    this.tobeFoundRemaining =
      this.imageStateService.getImageLists()[this.getIndex()].characters.length;
  }

  getIndex() {
    return this._index;
  }
  setIndex(value: number) {
    this._index = value;
  }

  processClickPosition(e: MouseEvent) {
    if (!this._dropDown) {
      this._dropDown = document.querySelector('.clickDropDown')!;
    }
    const image: Element = document.querySelector('.searchImage')!;

    const xRatio = e.offsetX / image.clientWidth;
    const yRatio = e.offsetY / image.clientHeight;
    if (xRatio > 0.7) {
      this._dropDown.style.left = `${e.pageX - this._dropDown.clientWidth}px`;
    } else {
      this._dropDown.style.left = `${e.pageX}px`;
    }
    this._dropDown.style.top = `${e.clientY}px`;
    this._dropDown.classList.remove('hidden');

    this._XYPage = { x: xRatio, y: yRatio };
  }

  processCharacterClickFinal(e: String) {
    const i = e as any;
    const character =
      this.imageStateService.getImageLists()[this.getIndex()].characters;
    if (
      this._XYPage.x > character[i * 1].coordinates[0].x &&
      this._XYPage.x < character[i * 1].coordinates[3].x &&
      this._XYPage.y > character[i * 1].coordinates[0].y &&
      this._XYPage.y < character[i * 1].coordinates[3].y
    ) {
      character[i * 1].found();
      this.tobeFoundRemaining--;
      this.updateNoticeText(`You Found ${character[i * 1].getName()}`);
    } else {
      this.updateNoticeText(`Better luck next time`);
    }

    const foundFalse = character.find((ele) => ele.isFound === false);
    if (!foundFalse) {
      clearInterval(this._intervalTimer);

      this.updateNoticeText(`YOU DID IT! Time: ${this.displayTimer()}`);
    }
  }
  updateNoticeText(text: string) {
    this.noticeText = text;

    if (this.noticeText.length > 1) {
      if (this.currentTimeout) {
        clearTimeout(this.currentTimeout);
      }
      this.currentTimeout = setTimeout(() => {
        this.noticeText = '';
      }, 1500);
    }
  }

  resetTimer() {
    this.timer = { minutes: 0, seconds: 0 };
  }

  processHover(e: Event) {
    const gameData: HTMLElement = document.querySelector('.gameDataDropDown')!;
    gameData.classList.remove('hidden');
  }

  mouseLeave() {
    const gameData: HTMLElement = document.querySelector('.gameDataDropDown')!;
    gameData.classList.add('hidden');
  }

  displayTimer(): string {
    return (
      (this.timer.minutes < 10 ? '0' : '') +
      this.timer.minutes +
      ' : ' +
      (this.timer.seconds < 10 ? '0' : '') +
      this.timer.seconds
    );
  }
}
