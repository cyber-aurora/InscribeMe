import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedeventsComponent } from './finishedevents.component';

describe('FinishedeventsComponent', () => {
  let component: FinishedeventsComponent;
  let fixture: ComponentFixture<FinishedeventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishedeventsComponent]
    });
    fixture = TestBed.createComponent(FinishedeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
