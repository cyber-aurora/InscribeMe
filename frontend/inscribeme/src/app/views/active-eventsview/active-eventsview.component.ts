import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-active-eventsview',
  templateUrl: './active-eventsview.component.html',
  styleUrls: ['./active-eventsview.component.scss']
})
export class ActiveEventsviewComponent {
  joinedEvents: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchJoinedEvents();
  }

  fetchJoinedEvents(): void {
    this.http.get<any[]>('/assets/active-events.json')
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
