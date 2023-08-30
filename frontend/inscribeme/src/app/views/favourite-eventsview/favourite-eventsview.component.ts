import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favourite-eventsview',
  templateUrl: './favourite-eventsview.component.html',
  styleUrls: ['./favourite-eventsview.component.scss']
})
export class FavouriteEventsviewComponent {
  joinedEvents: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchJoinedEvents();
  }

  fetchJoinedEvents(): void {
    this.http.get<any[]>('/assets/favourite-events.json')
      .subscribe(
        (response) => {
          this.joinedEvents = response;
        },
        (error) => {
          console.error('Error al obtener los eventos activos:', error);
        }
      );
  }
}
