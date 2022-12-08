import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {
constructor(private api:ApiService){}
  name=""
  adhaar=""
  address=""
  pincode=""
  dob=""
  email=""
  phonenumber=""
  username=""
  password=""
  confirmpassword=""

  readValues=()=>
  {
    let data:any={"name":this.name,"adhaar":this.adhaar,"address":this.address,"pincode":this.pincode,"dob":this.dob,"email":this.email,"phonenumber":this.phonenumber,"username":this.username,"password":this.password,"confirmpassword":this.confirmpassword}
    console.log(data)
    this.api.userreg(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status == "success") {
  
          alert("user registrated successfully")
  
          this.name=""
  
          this.adhaar=""
  
          this.address=""
  
          this.pincode=""
  
          this.dob=""
  
          this.email=""
  
          this.phonenumber=""
  
          this.username=""
  
          this.password=""
          this.confirmpassword=""
  
        }else{
  
          alert("Something went wrong")
  
        }
      }
    )
  }
  }

