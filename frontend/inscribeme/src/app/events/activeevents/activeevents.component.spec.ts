import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEventsComponent } from './activeevents.component';

describe('ActiveEventsComponent', () => {
  let component: ActiveEventsComponent;
  let fixture: ComponentFixture<ActiveEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveEventsComponent]
    });
    fixture = TestBed.createComponent(ActiveEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
