import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { imageList } from '../imageLists';
import { Character } from '../images/images';

@Component({
  selector: 'app-character-drop-down',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-drop-down.component.html',
  styleUrls: ['./character-drop-down.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CharacterDropDownComponent {
  @Input() imageIndex: number;
  characters: Character[];

  constructor() {
    this.imageIndex = 0;

    this.characters = imageList[this.imageIndex].characters;
  }
  ngOnInit() {
    console.log(imageList[this.imageIndex]);
  }
}
