import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEventViewComponent } from './activeeventview.component';

describe('ActiveEventViewComponent', () => {
  let component: ActiveEventViewComponent;
  let fixture: ComponentFixture<ActiveEventViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveEventViewComponent]
    });
    fixture = TestBed.createComponent(ActiveEventViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
