import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from "../../store";
import {Subscription} from "rxjs";
import {selectSelectedNews} from "../../store/news/news.selectors";
import {NewsItemState} from "../../lib/interfaces/news.interface";
import {actionGoBack} from "../../store/router/router.reducer";
import {defaultText} from "../../util/constants.util";

@Component({
  selector: 'page-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit, OnDestroy {

  public newsSubscription: Subscription;
  public selectedNews: NewsItemState;
  public introText: string = defaultText;

  constructor(
    private redux: NgRedux<AppState>
  ) {}

  ngOnInit(): any {
    this.newsSubscription = this.redux.select(selectSelectedNews).subscribe(selectedNews => {
      this.selectedNews = selectedNews;
    });
  }

  goBack(): void {
    this.redux.dispatch(actionGoBack());
  }

  ngOnDestroy() {
    if (this.newsSubscription) {
      this.newsSubscription.unsubscribe();
    }
  }
}
