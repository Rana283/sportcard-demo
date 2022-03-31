import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TotalValueComponent } from './total-value.component';

describe('TotalValueComponent', () => {
  let component: TotalValueComponent;
  let fixture: ComponentFixture<TotalValueComponent>;
  let store: MockStore;
  let router:Router;
  let mockCardData = [{ 'firstName': 'Veera', 'lastName': 'lenkala', 'playerNumber': 9, 'estimatedValue': 1, 'teamName': 'LA Lakers' },
  { 'firstName': 'Veera', 'lastName': 'lenkala', 'playerNumber': 9, 'estimatedValue': 1, 'teamName': 'LA Lakers' }];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [TotalValueComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(TotalValueComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.inject(MockStore)?.resetSelectors();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a estimated total component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should create store to be defined', () => {
    expect(store).toBeTruthy();
  });
  it('should create estimatedValue to be defined', () => {
    expect(component.estimatedValue).toBeDefined();
  });
  it('should create estimatedValue should be zero', () => {
    expect(component.estimatedValue).toEqual(0);
  });

  it('estimatedValue value should Greter than 1', () => {
    component.estimatedValue = mockCardData.map((card) => { return card.estimatedValue }).reduce((value1, value2) => (value1 + value2),0);
    expect(component.estimatedValue).toBeGreaterThanOrEqual(1);
  });
});
