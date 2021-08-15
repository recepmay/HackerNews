import {Component, Input, OnInit} from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import {AppState} from "../../../store";
import {NewsItemState} from "../../../lib/interfaces/news.interface";
import {actionSetSelectedNews} from "../../../store/news/news.actions";

@Component({
  selector: 'cm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() singleNews: NewsItemState;

  constructor(private redux: NgRedux<AppState>) {}

  ngOnInit(): any {}

  openNewsDetails(news: NewsItemState): void {
    this.redux.dispatch(actionSetSelectedNews(news));
  }
}
