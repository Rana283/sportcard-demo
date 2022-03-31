import {ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer.component';
import { Router} from '@angular/router';
import { Location } from '@angular/common';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let router: Router;
  let location:Location;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FooterComponent]
    })
      .compileComponents();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a footer component', () => {
    expect(component).toBeTruthy();
  });

  it('footerButton name should be about us', () => {
    expect(component.footerBtn).toBe('About Us');
  });


  it('Click on footerbutton handler', fakeAsync(() => {
    spyOn(component, 'footerBtnHandler');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.footerBtnHandler).toHaveBeenCalled();
  }));

  it('Navigate to /about page ', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/');
  }));

  it('check footerBtn name should not be back', () => {
    expect(component.footerBtn).not.toBe('back');
  });
});
