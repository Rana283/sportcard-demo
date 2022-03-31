import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { storeCard } from '../state/cards.actions';
import { getCardCollection } from '../state/cards.selectors';

@Component({
  selector: 'app-sport-card',
  templateUrl: './sport-card.component.html',
  styleUrls: ['./sport-card.component.css']
})
export class SportCardComponent  implements OnInit {
  sportCardForm = this.fb.group({
    firstName: ['', Validators.nullValidator && Validators.required],
    lastName: ['', Validators.nullValidator && Validators.required],
    playerNumber: ['', Validators.nullValidator && Validators.required],
    teamName: ['', Validators.nullValidator && Validators.required],
    estimatedValue: ['', Validators.pattern(/^-?(0|[1-9]\d*)?$/)]
  });
  constructor(private router: Router, private fb: FormBuilder, private store: Store) {

  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {
    this.store.select(getCardCollection).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      if (data && data.length) {
        this.sportCardForm.reset();
        this.router.navigate(['/card-list']);
      }
    });
  }

  addCard() {
    const cards = this.sportCardForm.value;
    this.store.dispatch(storeCard({ cards }));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
