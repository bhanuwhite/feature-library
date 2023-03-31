import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ahex-Calender';
  fromdate:Date= new Date();
  toDate:Date = new Date("03/29/2023");
  days:any = 4;
  width:string='100%';
  txtColor:string='purple';
  backgroundColor:string='red';

}
