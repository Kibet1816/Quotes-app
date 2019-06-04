import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()quote: Quote;
  @Output()isFinished = new EventEmitter<boolean>();
  @Output()delete = new EventEmitter<boolean>();


  upvote() {
    this.quote.upvotes += 1;
    this.isFinished.emit(true);
 }
 downvote() {
    this.quote.downvotes += 1;
 }

  constructor() { }

  ngOnInit() {
  }

}
