import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CardModel } from './card.model';

export const addCard = createFeatureSelector<ReadonlyArray<CardModel>>('cards');
export const storedCardCollectionState = createFeatureSelector<ReadonlyArray<number>>('collection');
export const getCardCollection = createSelector(
  addCard,
  (cards) => {
    return cards;
  }
);