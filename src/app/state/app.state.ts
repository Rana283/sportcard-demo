import { CardModel } from './card.model';

export interface AppState {
  cards: ReadonlyArray<CardModel>;
  collection: ReadonlyArray<CardModel>;
  playerNumber:number
}
