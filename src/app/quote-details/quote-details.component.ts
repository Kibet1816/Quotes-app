import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()quote: Quote;
  @Output()delete = new EventEmitter<boolean>();

upvote=0;
  upvote() {
    this.quote.upvotes += 1;
 }
 downvote() {
   if(upvote>0){
    this.quote.downvotes += 1;
 }else if(upvote=0){
   this.upvote=0;
 }
  constructor() { }

  ngOnInit() {
  }

}
