import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedlistComponent } from './finishedlist.component';

describe('FinishedlistComponent', () => {
  let component: FinishedlistComponent;
  let fixture: ComponentFixture<FinishedlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishedlistComponent]
    });
    fixture = TestBed.createComponent(FinishedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
