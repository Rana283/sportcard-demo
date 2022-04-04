import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SportCardService } from '../services/sport-card.service';

@Injectable()
export class MovieEffects {

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType('[Movies Page] Load Movies'),
        mergeMap(() => this.SportCardService.getAllCards()
            .pipe(
                map(cards => ({ type: '[Movies API] Movies Loaded Success', payload: cards })),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private SportCardService: SportCardService
    ) { }
}