import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Day } from './modal';
import { MyLibService } from './my-lib.service';


@Component({
  selector: 'lib-my-lib',
  templateUrl: "./my-lib.component.html",
  styleUrls: ["./my-lib.component.css"],

})
export class MyLibComponent {
  public weekDay: number[] = [0, 6];
  public holidays: number[] = [26, 28]
  public monthDays: any[] = [];
  public showMyContainer: boolean = false;
  public monthNumber!: number;
  public year!: number;
  public weekDaysName = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  public currentYear: number;
  public currentMonthIndex: number;
  public getMonth: any;
  public myInputValue!: number | string;
  public selectedDate!: number | string;
  public minDate: string = '2023-04-04';
  public maxDate: string = '2023-04-07';
  public startDate = new Date('2023-04-11');
  public endDate = new Date('2023-04-15');
  public dates: number[] = [];



  constructor(public calendarCreator: MyLibService) {
    let date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonthIndex = date.getMonth();

  }
  ngOnInit() {

    this.setMonthDays(this.calendarCreator.getCurrentMonth());

  }
  onNextMonth(): void {
    this.myInputValue='';
    this.monthNumber++;

    if (this.monthNumber == 12) {
      this.monthNumber = 0;
      this.year++;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth(): void {
    this.myInputValue='';

    this.monthNumber--;

    if (this.monthNumber < 0) {
      this.monthNumber = 11;
      this.year--;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  private setMonthDays(days: Day[]): void {
    // Functionality for weekly holidays
    days.map((x: any) => {
      x.disable = this.weekDay.includes(x.weekDayNumber) ? true : false
    })

    // Functinality for min date 
    const minNumber = new Date(this.minDate).getDate();
    days.map((x: any) => {
      x.min = (x.number < minNumber) ? true : false
    })

    // Functinality for max date 
    const maxNumber = new Date(this.maxDate).getDate();
    days.map((x: any) => {
      x.max = (x.number > maxNumber) ? true : false
    })
    //Functionality for enabling range of dates 

    // Returns an array of dates between the two dates
    const currentDate = new Date(this.startDate);// Clone the start date to avoid modifying the original date
    // Loop through each date, adding it to the dates array
    while (currentDate <= this.endDate) {
      this.dates.push(currentDate.getDate());
      currentDate.setDate(currentDate.getDate() + 1);
    }

    days.map((x: any) => {
      x.enable = this.dates.includes(x.number) ? true : false
    })

    //Functionality for holidays
    days.map((x: any) => {
      x.holiday = this.holidays.includes(x.number) ? true : false
    })
    
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;

  }

  //To close calendar popup
  onCancel() {
    this.showMyContainer = false;
  }

  //To show the selected date in input field of calendar
  onClickingDate(day: Day) {

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
}

