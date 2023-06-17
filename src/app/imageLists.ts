import { Coordinates, Images, Character } from './images/images';

export const imageList: Images[] = [
  {
    url: '../assets/WhereisWaldo.png',
    name: 'Where is Waldo',
    characters: [
      new Character('Odlaw', [
        { x: 282 / 1200, y: 424 / 900 },
        { x: 282 / 1200, y: 495 / 900 },
        { x: 304 / 1200, y: 424 / 900 },
        { x: 304 / 1200, y: 495 / 900 },
      ]),
    ],
  },
  {
    url: '../assets/WhereisPikachu.jpeg',
    name: 'Where is Pikachu',
    characters: [],
  },
];
