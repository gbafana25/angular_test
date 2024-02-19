import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'test';
  test_data:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('http://127.0.0.1:5000/test')
      .subscribe(data=> {
        console.log(data)
        this.test_data = data;
      })
  }

  
}
