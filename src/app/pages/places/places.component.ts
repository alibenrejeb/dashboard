import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places/places.service';
import { Place } from '../../services/places/place';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  places: Array<Place> = [];
  errorMessage: string;
  res: any[];

  constructor(private placesService: PlacesService) { }

  getPlaces() {
    this.placesService.getPlaces().subscribe(
      places => this.places = places,
      error => this.errorMessage = <any> error
    );
  }

  ngOnInit() {
    this.getPlaces();
  }

}
