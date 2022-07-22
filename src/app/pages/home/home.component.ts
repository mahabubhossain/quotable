import { Component, OnInit } from '@angular/core';
import { Quote, SearchResult } from 'src/app/shared/objects/Quote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  quotes: Quote[] = [];

  ngOnInit(): void {
  }

  getResult(result: Quote[]) {
    this.quotes = result;
  }

}
