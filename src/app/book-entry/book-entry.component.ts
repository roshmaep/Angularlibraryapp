import { Component } from '@angular/core';

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
  releasedyear=""
  price=""
  
  readValues=()=>
  {
    let data:any={"image":this.image,
    "title":this.title,
    "author":this.author,"description":this.description,"publisher":this.publisher,"language":this.language,"distributor":this.distributor,"releasedyear":this.releasedyear,"price":this.price}
   console.log(data)
  }
}

  


