import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from "../pages/news/news.component";
import {NewsDetailsComponent} from "../pages/news-details/news-details.component";

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'details', component: NewsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
