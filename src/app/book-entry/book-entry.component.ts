import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  image=""
  title=""
  author=""
  description=""
  publisher=""
  language=""
  distributor=""
  year=""
  price=""
  constructor(private api:ApiService){}
  readValues=()=>
  {
    let data:any={"image":this.image,
    "title":this.title,
    "author":this.author,"description":this.description,"publisher":this.publisher,"language":this.language,"distributor":this.distributor,"year":this.year,"price":this.price}
   console.log(data)
   this.api.addbook(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status == "success") {

        alert("Book added successfully")

        this.image=""

        this.title=""

        this.author=""

        this.description=""

        this.publisher=""

        this.language=""

        this.distributor=""

        this.year=""

        this.price=""

      }else{

        alert("Something went wrong")

      }
    }
  )
}
  }


  


