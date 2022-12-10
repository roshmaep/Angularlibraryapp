import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addbook=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/add",datatosend)
  }
  viewbook =()=>
  {
    return this.http.get("http://localhost:8080/view")
  }
  readValues=(datatosend:any)=>

  {

    return this.http.post("http://localhost:8080/search",datatosend)

  }
  deleteBook=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/delete",datatosend)
  }
  userreg=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/userreg",datatosend)
  }
  userLogin=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/userlogin",datatosend)
  }
  issuebook=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/issue",datatosend)
  }
}
