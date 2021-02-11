import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { FixtureComponent } from './components/fixture/fixture.component';

@NgModule({
  declarations: [
    AppComponent,
    FixturesComponent,
    FixtureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
