import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ahex-Calender';
  fromdate:Date= new Date("2023/03/22");
  toDate:Date = new Date("03/29/2023");
  days:any = 4;
}
