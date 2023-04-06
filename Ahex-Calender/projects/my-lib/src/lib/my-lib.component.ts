import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Day } from '../lib/model/day.model';
import { MyLibService } from './my-lib.service';


@Component({
  selector: 'lib-my-lib',
  templateUrl: "./my-lib.component.html",
  styleUrls: ["./my-lib.component.scss"],

})
export class MyLibComponent {

  @Input() calHeaderColor: string = "rgb(9,97,146)";
  @Input() calHeaderFontSize: string = "20px";

  public month: any = [0, 2]
  public monthDays: Day[] = [];
  showMyContainer: boolean = false;
  public monthNumber: any;
  public year!: number;
  public weekDaysName = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  currentYear: number;
  currentMonthIndex: number;
  getMonth: any;
  date: Date;
  selectedDate: any;
  myInputValue: any;
  gettingDate: number;

  constructor(public calendarCreator: MyLibService) {
    this.date = new Date();
    this.currentYear = this.date.getFullYear();
    this.currentMonthIndex = this.date.getMonth();
    this.gettingDate = this.date.getDate();
    // console.log(this.gettingDate);

  }
  ngOnInit() {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());
  }
  onNextMonth(): void {
    this.monthNumber++;
    if (this.monthNumber == 13) {
      this.monthNumber = 1;
      this.year++;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth(): void {
    this.monthNumber--;

    if (this.monthNumber < 1) {
      this.monthNumber = 12;
      this.year--;
    }
    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));

  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    // console.log(this.monthDays);
    this.monthDays.map((x: any) => {
      // console.log(x.weekDayNumber);
      x.disable = this.month.filter((y: any) =>
       {
        if(y == x.weekDayNumber){
        return true;         
        }else{
          return false;
        }
       })
    })
    console.log(this.monthDays);

    this.monthNumber = this.monthDays[0].monthIndex;

    this.year = this.monthDays[0].year;

  }

  getDate(day: Day) {
    let yr;
    let mnth;
    let dt;
    yr = day.year;
    mnth = day.monthIndex + 1;
    dt = day.number;
    this.selectedDate = dt + '/' + mnth + '/' + yr
    this.myInputValue = this.selectedDate

    this.showMyContainer = false;
  }


  max(day: any) {
    let yr;
    let mnth;
    let dt;
    yr = day.year;
    mnth = day.monthIndex + 1;
    dt = day.number;
    this.selectedDate = dt + '/' + mnth + '/' + yr

  }
}
