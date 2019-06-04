import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  newQuote = new Quote(0, '', '', 0, 0);

  quotes = [

  ];

 @Input()quote: Quote;

 @Output()showQuote = new EventEmitter<Quote>();

 displayQuote() {
   this.showQuote.emit(this.newQuote);
 }

  addNewQuote(quote: string) {
    this.quotes.push(this.quote);
  }
  ngOnInit() {
  }

}
