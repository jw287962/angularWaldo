export interface Images {
  url: string;
  name: string;
  index: number;
  characters: Character[];
}

export interface Coordinates {
  x: number;
  y: number;
}
// (name: string, coordinates: Coordinates[])
export class Character {
  name: string;
  coordinates: Coordinates[];
  isFound: boolean = false;

  constructor(name: string, coordinates: Coordinates[]) {
    this.name = name;
    this.coordinates = coordinates;
  }

  getCoordinates(): Coordinates[] {
    return this.coordinates;
  }
  getName(): string {
    return this.name;
  }

  found() {
    this.isFound = true;
  }
  reset() {
    this.isFound = false;
  }
}
// export function Coordinate(coords: Coordinates) {
//   coords = coords;
//   return coords;
// }
