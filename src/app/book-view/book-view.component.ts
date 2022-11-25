import { Component } from '@angular/core';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {
  books:any=[
    {
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcERi7vi1hEO5VoavurFbczgqMFuahpgnHQ&usqp=CAU",
      "title":"Adujeevitham",
      "author":"Basheer",
      "view more":"view more"
    }
    ,
    {
      "image":"https://www.softwaretestinghelp.com/wp-content/qa/uploads/2022/01/Romeo-Juliet.jpg",
      "title":"Watchmen",
      "author":"Stan Lee",
      "viewmore":"view more"
    }
    ,
    {
      "image":"https://www.softwaretestinghelp.com/wp-content/qa/uploads/2022/01/cover-edition-Treasure-Island-Robert-Louis-Stevenson1.jpg",
      "title":"Harry Porter",
      "author":"Rowling",
      "viewmore":"view more"
    }
    ,
    {
      "image":"https://www.softwaretestinghelp.com/wp-content/qa/uploads/2022/01/gone_girl_books_fb.jpg",
      "title":"The diary of young girl",
      "author":"Pallavali",
      "viewmore":"view more"
    }
    ,
    {
      "image":"https://s0.2mdn.net/simgad/8887184346372631890",
      "title":"Stephen King",
      "author":"Lee",
      "viewmore":"view more"
    }
    ,
    {
      "image":"https://www.softwaretestinghelp.com/wp-content/qa/uploads/2022/01/best-seller1.jpg",
      "title":"design anything",
      "author":"Jhon Paul",
      "viewmore":"view more"
    }
    ,
    {
      "image":"https://www.softwaretestinghelp.com/wp-content/qa/uploads/2022/01/Diary-of-a-young-girl.jpg",
      "title":"Treasure Island",
      "author":"Willam",
      "viewmore":"view more"
    }
    ,
    {
      "image":"https://www.softwaretestinghelp.com/wp-content/qa/uploads/2022/01/Watchmen_HC.jpg",
      "title":"Romeo and Juelio",
      "author":"William Shakespeare",
      "viewmore":"view more"
    }
    
    
    
  ]

}
