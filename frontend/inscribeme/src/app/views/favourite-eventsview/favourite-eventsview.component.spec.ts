import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteEventsviewComponent } from './favourite-eventsview.component';

describe('FavouriteEventsviewComponent', () => {
  let component: FavouriteEventsviewComponent;
  let fixture: ComponentFixture<FavouriteEventsviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteEventsviewComponent]
    });
    fixture = TestBed.createComponent(FavouriteEventsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
