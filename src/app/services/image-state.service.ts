import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageStateService {
  private imageIndex: number = 0;

  constructor() {}
  setIndex(value: number) {
    this.imageIndex = value;
  }
  getIndex(): number {
    return this.imageIndex;
  }
}
