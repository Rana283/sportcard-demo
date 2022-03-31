import { createReducer, on } from '@ngrx/store';
import { deleteCardByPlayerName, storeCard } from './cards.actions';

export const initialState = [];

export const cardsReducer = createReducer(
  initialState,
  on(storeCard, (state, { cards }) => [...state, cards]),
  on(deleteCardByPlayerName, (state, { playerNumber }) => state.filter((id) => id.playerNumber !== playerNumber))
  );