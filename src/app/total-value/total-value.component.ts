import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCardCollection } from '../state/cards.selectors';

@Component({
  selector: 'app-total-value',
  templateUrl: './total-value.component.html',
  styleUrls: ['./total-value.component.css']
})
export class TotalValueComponent {

  estimatedValue: number = 0;
  constructor(
    private store: Store
  ) {
    this.store.select(getCardCollection).pipe(
    ).subscribe(data => {
      let estimatedValue:any = 0;
      if (data && data.length) {
        estimatedValue = data.map((card) => { return card.estimatedValue });
        this.estimatedValue = estimatedValue.reduce((value1, value2) => +value1 + +value2);
      }
    });
  }
}
