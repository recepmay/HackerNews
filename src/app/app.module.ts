import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './common/app-routing.module';
import { AppComponent } from './app.component';
import { ErrorHandlingService } from "./common/error-handler.service";
import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { NgReduxRouter, NgReduxRouterModule } from "@angular-redux/router";
import { AppState, createAppStore } from "./store";
import { PagesModule } from "./pages/pages.module";
import {actionInit} from "./store/effects/init.effect";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [
    ErrorHandlingService,
    {
      provide: ErrorHandler,
      useClass: ErrorHandlingService
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    private ngRedux: NgRedux<AppState>,
    private ngReduxRouter: NgReduxRouter
  ) {
    this.setupRedux();
  }

  setupRedux() {
    this.ngRedux.provideStore(createAppStore());
    this.ngRedux.dispatch(actionInit());

    // Initialize outer bindings
    this.ngReduxRouter.initialize();
  }
}
