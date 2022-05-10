import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, tap } from 'rxjs';


export class User{
  email: String | undefined;
  password: String | undefined;
  constructor(){}
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  // change to true to show the 'wrong input' message
  wrong:Boolean=false;

  myform: FormGroup = this.fb.group({
    username: ['', ],
    password: ['', ]
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

    this.the_user.email=this.myform.value.username;
    this.the_user.password=this.myform.value.password;

    try {
      this.httpClient.post<any>('http://localhost:8080/login' ,this.the_user,{ observe: "response"}).subscribe(
      response=>{
        console.log(response.headers.get("Authorization"))

        localStorage.setItem("Authorization", String(response.headers.get("Authorization"))  );
        console.log("sot : " + localStorage.getItem("Authorization"))
        window.location.href = "home"

      })
    } catch (error) {}


    this.wrong= true
      console.log(this.wrong)
    console.log("**************************")
  }

  async submitHandler() {
    const formvalue = this.myform.value;
    console.log("+++++++++++++++++++++++++" + formvalue)
  }



}
