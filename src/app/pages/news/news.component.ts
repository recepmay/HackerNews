import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {selectNews} from "../../store/news/news.selectors";
import {NewsItemState} from "../../lib/interfaces/news.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'page-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @select(selectNews)
  public news: Observable<NewsItemState[]>;

  constructor() {}

  ngOnInit(): any {
  }
}
