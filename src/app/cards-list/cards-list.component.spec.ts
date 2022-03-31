import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardsListComponent } from './cards-list.component';
import { AppState } from '../state/app.state';
import { getCardCollection } from '../state/cards.selectors';
import { RouterTestingModule } from '@angular/router/testing';

describe('CardsListComponent', () => {
    let component: CardsListComponent;
  let fixture: ComponentFixture<CardsListComponent>;
  let store: MockStore<AppState>;
  let mockGetCardCollection;
  let mockCardData = [{'firstName':'Veera', 'lastName':'lenkala','playerNumber':9, 'estimatedValue':1, 'teamName':'LA Lakers'}];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [CardsListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CardsListComponent);
    component = fixture.componentInstance;

    mockGetCardCollection = store.overrideSelector(getCardCollection, mockCardData);
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.inject(MockStore)?.resetSelectors();
  });
  
  it('should create a cardList component', () => {
    expect(component).toBeDefined();
  });

  it('should store to be defined', () => {
    expect(store).toBeDefined();
  });
  it('select method should dispatch the scrollToView', () => {
    spyOn(component, 'scrollToView');
    component.scrollToView(mockCardData);
  });

  it('should call ngOnDestroy method to unSubscribe', () => {
    spyOn(component, 'ngOnDestroy').and.callThrough();
  });
});