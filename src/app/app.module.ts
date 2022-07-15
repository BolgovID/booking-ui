import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListItemComponent } from 'src/shared/components/list-item/list-item.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPage } from './search/search.page';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    SearchPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
