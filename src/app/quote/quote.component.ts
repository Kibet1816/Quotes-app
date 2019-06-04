import { Component, OnInit, Input } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input()quote: Quote;

  quotes = [
    // new Quote(1, 'Loyangapuo', 'Kijana mfupi,amenona,round', 0, 0),
    // new Quote(2, 'Eminem', 'Keep it real', 0, 0),
    // new Quote(3, 'Men from Valyria', 'What is dead may never die', 0, 0),
  ];
  addAnotherQuote (quote: any) {
   const quoteLength = this.quotes.length;
   quote.id = quoteLength + 1;
   this.quotes.unshift(quote);
  }
  quoteDelete(isComplete, index) {
    if (isComplete) {
      const confirmDelete = confirm('Do you want to proceed ??????');
      if (confirmDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
