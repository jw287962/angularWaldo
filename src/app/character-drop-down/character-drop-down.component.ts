import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
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
  characters!: Character[];
  @Output() searchIndexValue = new EventEmitter<string>();
  constructor() {
    this.imageIndex = 0;
  }
  ngOnInit() {
    this.characters = imageList[this.imageIndex].characters;
  }

  processCharacterClick(e: Event) {
    const target = e.target as HTMLElement;
    this.searchIndexValue.emit(target.dataset['charindex']);
  }
}
