import { Injectable } from '@angular/core';
import { imageList } from '../imageLists';
import { Images } from '../images/images';

@Injectable({
  providedIn: 'root',
})
export class ImageStateService {
  private imageIndex: number = 0;
  private imageLists = [...imageList];
  constructor() {}
  setIndex(value: number) {
    this.imageIndex = value;
  }
  getIndex(): number {
    return this.imageIndex;
  }

  getImageLists() {
    return this.imageLists;
  }
  foundCharacter(value: number) {
    this.imageLists[this.imageIndex].characters[value].found();
  }

  resetFound() {
    const characters = this.imageLists[this.imageIndex].characters;
    for (let i = 0; i < characters.length; i++) {
      characters[i].reset();
    }
  }
}
