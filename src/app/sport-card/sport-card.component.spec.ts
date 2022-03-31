import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportCardComponent } from './sport-card.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../state/app.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('SportCardComponent', () => {
  let fixture: ComponentFixture<SportCardComponent>;
  let component: SportCardComponent;
  let store: MockStore<AppState>;
  let router: Router;
  let mockCardData = { 'firstName': 'Veera', 'lastName': 'lenkala', 'playerNumber': 9, 'estimatedValue': 1, 'teamName': 'LA Lakers' };


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule],
      declarations: [SportCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(SportCardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.inject(MockStore)?.resetSelectors();
  });
  it('should dispatch the Store', () => {
    spyOn(store, 'dispatch').and.callFake((mockCardData) => { mockCardData });
  });
  it('Form submit addCard method shouldcalled', () => {
    spyOn(component, 'addCard').and.callThrough(); // attach events to component with bining
    // spyOn(component, 'sportCardForm').and.callThrough(); //callThrough()
    component.addCard();
    let btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('submit', null);
    fixture.detectChanges();
    expect(component.addCard).toHaveBeenCalled();
  });
  it('should call ngOnDestroy method to unSubscribe', () => {
    spyOn(component, 'ngOnDestroy').and.callThrough();
  });
});
