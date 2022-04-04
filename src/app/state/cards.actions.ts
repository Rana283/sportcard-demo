import { createAction, props } from '@ngrx/store';
import { CardModel } from './card.model';

export const storeCard = createAction(
  '[CardModel List] store Card Sucess',
  props<{ cards: ReadonlyArray<CardModel> }>()
);
export const getCards = createAction(
  '[Collection] getSored Card Sucess',
  props<{ collection:any }>()
);

export const deleteCardByPlayerName = createAction(
  '[deleteCardByPlayerName List] store playerNumber Sucess',
  props<{playerNumber: number}>()
);