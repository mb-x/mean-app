import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BookService } from './book.service';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

const ROUTES = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    BookService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
