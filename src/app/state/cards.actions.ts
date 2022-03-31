import { createAction, props } from '@ngrx/store';
import { CardModel } from './card.model';

export const storeCard = createAction(
  '[CardModel List] store Card Sucess',
  props<{ cards: ReadonlyArray<CardModel> }>()
);

export const deleteCardByPlayerName = createAction(
  '[deleteCardByPlayerName List] store playerNumber Sucess',
  props<{playerNumber: number}>()
);