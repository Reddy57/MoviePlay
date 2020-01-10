import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.css']
})
export class BuyButtonComponent implements OnInit {

  @Input() movie: Movie;
  @Output() buyEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  buyMovie(movie: Movie) {

    // call API to Save data and emit success message to parent
    this.buyEvent.emit(true);
  }

}
