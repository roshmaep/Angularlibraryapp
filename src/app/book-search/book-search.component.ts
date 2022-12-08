import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  constructor(private api:ApiService){}

  title=""

  readValues:any = []

  readValue=()=>

  {

    let data:any={

    "title":this.title}

    console.log(data)

    this.api.readValues(data).subscribe(

      (response:any)=>{

        console.log(response)

        if (response.length==0) {

          alert("invalide book title")

         

        } else {

          this.readValues = response

        }

      }

    )

  }
  deleteBtnclick=(id:any)=>{
    let data:any={"id":id}
    this.api.deleteBook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("succesfully deleted")
          this.readValues=[]
          
        }
        else{
          alert("invalid input")
        }
      }
    )
  }


}
