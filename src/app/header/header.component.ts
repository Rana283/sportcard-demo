import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCardCollection } from '../state/cards.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  estimatedValue: number = 0;
  constructor(
    private store: Store
  ) {
    this.store.select(getCardCollection).pipe(
    ).subscribe(data => {
      if (data && data.length) {
        const estimatedValue = data.map((card) => { return card.estimatedValue});
        this.estimatedValue = estimatedValue.reduce((value1, value2) => +value1 + +value2);
      }
    });

  }

  title: string = 'SportCard'

  ngOnInit() {
  }

}
