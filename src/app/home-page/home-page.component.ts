import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  homelist:string[] | undefined

  constructor(private  httpClient:HttpClient) { }

  ngOnInit(): void {
    this.geta();
  }

  geta(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Authorization': String(localStorage.getItem('Authorization'))
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    console.log(String(localStorage.getItem('Authorization')))

    this.httpClient.get<any>('http://localhost:8080/Administration/secrets' ,requestOptions).subscribe(Response =>{
      console.log("Response");
      console.log(Response);
      this.homelist=Response
    })
  }

}
