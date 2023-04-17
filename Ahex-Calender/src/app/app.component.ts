import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ahex-Calender';
  // weekDayNumber:any =[2,4];
  satertDate:Date= new Date("09/april/2023");
  endDate:Date = new Date("03/29/2023");
}
