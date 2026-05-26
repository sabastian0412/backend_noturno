import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Time } from './time.model';
import { TimeService } from './time-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  times:Time[]=[];
  constructor(private timeServece:TimeService){}
    ngOnInit(): void {
      this.timeServece.getTimes().subscribe(data=>{
        this.times=data;
      })
  
    }
  }
 

