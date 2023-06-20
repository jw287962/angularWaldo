import { Coordinates, Images, Character } from './images/images';
export const imageList: Images[] = [
  {
    url: 'assets/WhereisWaldo.png',
    name: 'Where is Waldo',
    index: 0,
    characters: [
      new Character('Odlaw', [
        { x: 282 / 1200, y: 424 / 900 },
        { x: 282 / 1200, y: 495 / 900 },
        { x: 304 / 1200, y: 424 / 900 },
        { x: 304 / 1200, y: 495 / 900 },
      ]),
      new Character('Waldo', [
        { x: 618 / 1200, y: 426 / 900 },
        { x: 618 / 1200, y: 478 / 900 },
        { x: 655 / 1200, y: 426 / 900 },
        { x: 655 / 1200, y: 478 / 900 },
      ]),
      new Character('Whitebeard', [
        { x: 736 / 1200, y: 418 / 900 },
        { x: 736 / 1200, y: 483 / 900 },
        { x: 775 / 1200, y: 426 / 900 },
        { x: 775 / 1200, y: 483 / 900 },
      ]),
    ],
  },
  {
    url: 'assets/WhereisPikachu.jpeg',
    name: 'Where is Pikachu',
    index: 1,
    characters: [
      new Character('Chimchar', [
        { x: 559 / 1023, y: 398 / 962 },
        { x: 559 / 1023, y: 398 / 962 },
        { x: 583 / 1023, y: 433 / 962 },
        { x: 583 / 1023, y: 433 / 962 },
      ]),
      new Character('Lucario', [
        { x: 525 / 1023, y: 239 / 962 },
        { x: 525 / 1023, y: 280 / 962 },
        { x: 551 / 1023, y: 239 / 962 },
        { x: 551 / 1023, y: 280 / 962 },
      ]),
    ],
  },
];
