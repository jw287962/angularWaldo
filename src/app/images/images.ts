export interface Images {
  url: string;
  name: string;
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
}
// export function Coordinate(coords: Coordinates) {
//   coords = coords;
//   return coords;
// }
