import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, tap } from 'rxjs';


export class User{
  email: String | undefined;
  password: String | undefined;
  constructor()
  {
  }
 
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform: FormGroup = this.fb.group({
    username: ['', ],
    password: ['', Validators.minLength(5)]
  });  

  the_user:User = new User();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  
  constructor(private fb: FormBuilder,private  httpClient:HttpClient) { 
    
  }

  ngOnInit(): void {
    
    //this.myform.valueChanges.subscribe(console.log)
  }

  login():void{
    console.log("**********************")
    const formvalue = this.myform.value;
    console.log(formvalue)

    this.the_user.email="test1";
    this.the_user.password="password";

    this.httpClient.post<any>('http://localhost:8080/login' ,this.the_user,{headers: new HttpHeaders, observe: "response"}).subscribe(
      response=>{
        console.log("headers : " + response.headers.get("Authorization"))
       // localStorage.setItem("Authorization",response.headers.get("Authorization"));
      })
    console.log("**************************")

  //  window.location.href = "home"
  }

  async submitHandler() {
    const formvalue = this.myform.value;
    console.log("+++++++++++++++++++++++++" + formvalue)
  }



}
