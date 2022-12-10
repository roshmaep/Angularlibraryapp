import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {
  title=""
  name=""
  date=""
  member=""
  constructor(private api:ApiService){}
  readValues=()=>
  {
    let data:any={
    "title":this.title,"name":this.name,"date":this.date,"member":this.member}
    console.log(data)
    this.api.issuebook(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status == "success") {

          alert("book issue successfully")

          this.name=""

          this.title=""

          this.date=""

          this.member=""
          }else{

          alert("Something went wrong")

        }
      }
    )
  }
  }

