import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { getCardCollection } from '../state/cards.selectors';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore;
  let mockGetCardCollection;
  let mockCardData = [{ 'firstName': 'Veera', 'lastName': 'lenkala', 'playerNumber': 9, 'estimatedValue': 1, 'teamName': 'LA Lakers' },
  { 'firstName': 'Veera', 'lastName': 'lenkala', 'playerNumber': 9, 'estimatedValue': 1, 'teamName': 'LA Lakers' }];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [HttpClientTestingModule],
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    mockGetCardCollection = store.overrideSelector(getCardCollection, mockCardData);
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.inject(MockStore)?.resetSelectors();
  });

  it('should create a header component test case', () => {
    expect(component).toBeTruthy();
  });

  it('should create a header component store to be defined', () => {
    expect(store).toBeTruthy();
  });
  it('Check  estimatedValue value should be Zero', () => {
    expect(component.estimatedValue).toEqual(0);
  });
  it('estimatedValue value should Greater than 1', () => {
    component.estimatedValue = mockCardData.map((card) => { return card.estimatedValue }).reduce((value1, value2) => (value1 + value2),0);
    expect(component.estimatedValue).toBeGreaterThanOrEqual(1);
  });
});
