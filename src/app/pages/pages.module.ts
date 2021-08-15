import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from "./news/news.component";
import { TabbarComponent } from "./common/tabbar/tabbar.component";
import { CardComponent } from "./common/card/card.component";
import { LoaderComponent } from "./common/loader/loader.component";
import { NewsDetailsComponent } from "./news-details/news-details.component";

@NgModule({
  declarations: [
    NewsComponent,
    TabbarComponent,
    CardComponent,
    LoaderComponent,
    NewsDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
