import { HttpClient } from '@angular/common/http';
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
    this.httpClient.get<any>('http://localhost:8080/utils/gimme' ).subscribe(Response =>{
      console.log("Response");
      console.log(Response);
      this.homelist=Response
    })
  }

}
