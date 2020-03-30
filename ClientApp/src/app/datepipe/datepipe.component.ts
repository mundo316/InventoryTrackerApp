import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-pipe',
  template: `<div>
    <p>Today is {{today | date}}</p>
  </div>`
 })
 // Get the current date and time as a date-time value.
 export class DatePipeComponent {
   today: number = Date.now();
 }