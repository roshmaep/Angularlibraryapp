import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookViewComponent } from './book-view/book-view.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    BookViewComponent,
    UserLoginComponent,
    UserRegComponent,
    IssueBookComponent,
    BookSearchComponent,
    BookDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
