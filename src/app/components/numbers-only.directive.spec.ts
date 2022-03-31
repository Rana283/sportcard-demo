import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SportCardComponent } from '../sport-card/sport-card.component';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

describe('NumbersOnlyDirective', () => {
  let fixture: ComponentFixture<SportCardComponent>;
  let directive;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumbersOnlyDirective, SportCardComponent],
      imports: [StoreModule.forRoot({}), RouterTestingModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SportCardComponent);
    fixture.detectChanges();
    directive = fixture.debugElement.queryAll(By.directive(NumbersOnlyDirective));
  });

  it('should create numberOnly Directive', () => {
    expect(directive).toBeTruthy();
  });
});