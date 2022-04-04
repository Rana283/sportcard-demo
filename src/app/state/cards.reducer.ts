import { createReducer, on } from '@ngrx/store';
import { deleteCardByPlayerName, getCards, storeCard } from './cards.actions';

export const initialState = [];

export const cardsReducer = createReducer(
  initialState,
  on(getCards, (state, { collection }) => [...state, ...collection]),
  on(storeCard, (state, { cards }) => [...state, cards]),
  on(deleteCardByPlayerName, (state, { playerNumber }) => state.filter((id) => id.playerNumber !== playerNumber))
  );