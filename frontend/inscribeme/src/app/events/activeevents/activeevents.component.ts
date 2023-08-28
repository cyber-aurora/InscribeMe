import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activeevents',
  templateUrl: './activeevents.component.html',
  styleUrls: ['./activeevents.component.scss']
})
export class ActiveEventsComponent implements OnInit {
  joinedEvents: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchJoinedEvents();
  }

  fetchJoinedEvents(): void {
    this.http.get<any[]>('ruta-de-tu-api')
      .subscribe(
        (response) => {
          this.joinedEvents = response.filter(event => event.joined);
        },
        (error) => {
          console.error('Error al obtener los eventos activos a los que estás unido:', error);
        }
      );
  }
}
