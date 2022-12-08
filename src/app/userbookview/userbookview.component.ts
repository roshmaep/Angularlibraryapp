import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userbookview',
  templateUrl: './userbookview.component.html',
  styleUrls: ['./userbookview.component.css']
})
export class UserbookviewComponent {
  constructor(private api:ApiService){
    api.viewbook().subscribe((response:any)=>
    {this.readValues=response;})}
    title=""
    readValues:any =[]
    readValue=()=>
    {
      let data:any={
      "title":this.title}
      console.log(data)
      
      this.api.readValues(data).subscribe(
        (response:any)=>{
          console.log(response)
          if (response.length == 0) {
            alert("Invalide  book title")
            
          } else {
            this.readValues = response
            
          }
        }
      )
    }
    
  books:any=[]
}
