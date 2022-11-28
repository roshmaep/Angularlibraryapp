import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {
  title=""
  readValues=()=>
  {
    let data:any={
    "title":this.title}
    console.log(data)
  }
}
