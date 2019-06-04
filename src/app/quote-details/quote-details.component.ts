import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()quote: Quote;
  @Output()isComplete = new EventEmitter<boolean>();

  upvote = 0;
  upVote() {
     this.upvote = this.upvote + 1;
  }
  downVote() {
    if (this.upvote > 0) {
    this.upvote = this.upvote - 1;
    } else if (this.upvote = 0) {
      this.upvote = 0;
    }
  }
  deleteQuote(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
