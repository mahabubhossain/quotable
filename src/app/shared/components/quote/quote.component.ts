import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../../objects/Quote';

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input()
  quote: Quote = new Quote;
  
  constructor() { }

  ngOnInit(): void {
  }

}
