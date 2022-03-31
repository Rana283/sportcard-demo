import { ComponentFixture, TestBed} from '@angular/core/testing';

import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsComponent]
    })
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize aboutus Component ', () => {
    expect(component).toBeTruthy();
  });

  it('Title name should be  Sport Card Trading app', () => {
    expect(component.title).toEqual('Sport Card Trading app');
  });

  it('Title name should not be Sport Card', () => {
    expect(component.title).not.toEqual('Sport Card');
  });
});
