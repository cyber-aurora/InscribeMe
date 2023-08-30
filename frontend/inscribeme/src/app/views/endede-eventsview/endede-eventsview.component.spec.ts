import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndedeEventsviewComponent } from './endede-eventsview.component';

describe('EndedeEventsviewComponent', () => {
  let component: EndedeEventsviewComponent;
  let fixture: ComponentFixture<EndedeEventsviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndedeEventsviewComponent]
    });
    fixture = TestBed.createComponent(EndedeEventsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
