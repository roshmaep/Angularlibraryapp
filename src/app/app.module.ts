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
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

const myRoute:Routes=[
  {
     path:"",
     component:AdminLoginComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"userreg",
    component:UserRegComponent
  },
  {
    path:"issuebook",
    component:IssueBookComponent
  },
  {
    path:"bookview",
    component:BookViewComponent
  },
  {
    path:"booksearch",
    component:BookSearchComponent
  },
  {
    path:"bookentry",
    component:BookEntryComponent
  },
  {
    path:"bookedit",
    component:BookEditComponent
  },
  {
    path:"bookdelete",
    component:BookDeleteComponent
  },
  {
    path:"userreg",
    component:UserRegComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  }
  
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    BookViewComponent,
    UserLoginComponent,
    UserRegComponent,
    IssueBookComponent,
    BookSearchComponent,
    BookDeleteComponent,
    BookEditComponent,
    BookEntryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
