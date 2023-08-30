import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEventsviewComponent } from './active-eventsview.component';

describe('ActiveEventsviewComponent', () => {
  let component: ActiveEventsviewComponent;
  let fixture: ComponentFixture<ActiveEventsviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveEventsviewComponent]
    });
    fixture = TestBed.createComponent(ActiveEventsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
