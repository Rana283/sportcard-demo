import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { deleteCardByPlayerName } from '../state/cards.actions';
import { getCardCollection } from '../state/cards.selectors';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {
  cardsListCollection: any = [];
  constructor(
    private store: Store
  ) {
    this.store.select(getCardCollection).pipe(
    ).subscribe(data =>
      this.scrollToView(data));
      console.log("removed");
  }
  ngOnInit(): void {
      this.store.select(getCardCollection).pipe().subscribe(data =>{
        console.log("removed");
      })
  }
  destroy$: Subject<boolean> = new Subject<boolean>();

  /* ScrollToView every records adds once move to latest record.*/
  scrollToView(data) {
    this.cardsListCollection = data;
    const scrollElement = document.getElementById("scrollView");
    if (scrollElement)
      scrollElement.scrollIntoView();
  }
/* Destory hook calls once when it is  out of scope*/
  ngOnDestroy(){
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
  }

  deleteHander(data){
    const playerNumber = data.playerNumber;
    this.store.dispatch(deleteCardByPlayerName({playerNumber}))
  }

}
