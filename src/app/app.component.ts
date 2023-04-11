import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-calendar';
  backgroundColor:string='grey';
  width:string='200px';
  weekdaysTxtColor:string='Black';
  headerTxtColor:string='white';
  prevTxtColor:string='white';
  nextTxtColor:string='white';
  weekdaysBackgroundColor:string='light grey'
  headerBackgroundColor:string='grey'
  datesBackgroundColor:string='white'
  cancelBtnBackgroundColor:string='white';
  cancelBtnTxtColor:string='Black'
}
