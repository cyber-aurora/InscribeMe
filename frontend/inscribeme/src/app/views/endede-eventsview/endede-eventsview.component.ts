import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-endede-eventsview',
  templateUrl: './endede-eventsview.component.html',
  styleUrls: ['./endede-eventsview.component.scss']
})
export class EndedeEventsviewComponent {
  joinedEvents: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchJoinedEvents();
  }

  fetchJoinedEvents(): void {
    this.http.get<any[]>('/assets/ended-events.json')
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
