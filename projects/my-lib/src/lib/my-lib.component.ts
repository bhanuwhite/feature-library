import { Component, Input } from '@angular/core';
import { Day } from './modal';
import { MyLibService } from './my-lib.service';


@Component({
  selector: 'lib-my-lib',
  templateUrl: "./my-lib.component.html",
  styleUrls: ["./my-lib.component.css"],

})
export class MyLibComponent {
  public weekDay: number[] = [0, 6];
  public holidays: string[] = ['22/3/2023', '24/3/2023'];
  public monthDays: any[] = [];
  public showMyContainer: boolean = false;
  public monthNumber: number = new Date().getMonth();
  public year: number = new Date().getFullYear();
  public weekDaysName = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  public currentYear: number;
  public currentMonthIndex: number;
  public myInputValue!: number | string;
  public selectedDate!: string;
  public minDate: string = '2023-04-04';
  public maxDate: string = '2023-04-07';
  public startDate = new Date('2023-04-11');
  public endDate = new Date('2023-04-15');
  public dates: number[] = [];
  public isSameMonth: boolean = false;
  public todaysDate!: number;
  public choosenDate!: number;
  @Input() headerBackgroundColor: string = 'blue';
  @Input() weekdaysBackgroundColor: string = 'blue';
  @Input() headerTxtColor: string = 'green';
  @Input() weekdaysTxtColor: string = 'green';
  @Input() prevTxtColor: string = 'green';
  @Input() nextTxtColor: string = 'green';
  @Input() datesBackgroundColor: string = 'white';
  @Input() cancelBtnBackgroundColor: string = 'white';
  @Input() cancelBtnTxtColor: string = 'white';
  constructor(public calendarCreator: MyLibService) {
    let date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonthIndex = date.getMonth();
    this.todaysDate = date.getDate();
  }
  ngOnInit() {
    this.isSameMonth = true;
    this.setMonthDays(this.calendarCreator.getCurrentMonth());
  }
  //On next button click
  onNextMonth(): void {
    this.monthNumber++;
    if (this.monthNumber == this.currentMonthIndex) {
      this.isSameMonth = true;
    } else {
      this.isSameMonth = false;
    }
    if (this.monthNumber == 12) {
      this.monthNumber = 0;
      this.year++;
    }
    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }
  //On prev button click
  onPreviousMonth(): void {
    this.monthNumber--;
    if (this.monthNumber == this.currentMonthIndex) {
      this.isSameMonth = true;
    } else {
      this.isSameMonth = false;
    }
    if (this.monthNumber < 0) {
      this.monthNumber = 11;
      this.year--;
    }
    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }
  //Setting days in month of calendar
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
      x.holiday = this.holidays.includes(x.number + '/' + (x.monthIndex) + '/' + x.year) ? true : false
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
    this.choosenDate = day.number
    let yr;
    let mnth;
    let dt;
    yr = day.year;
    mnth = day.monthIndex + 1;
    dt = day.number;
    this.selectedDate = dt + '/' + mnth + '/' + yr;
    this.myInputValue = this.selectedDate;
    this.showMyContainer = false;
  }
  //Functionality for showing current month on clicking calendar icon
  onCalendarIconClick() {
    this.isSameMonth = true;
    this.monthNumber = new Date().getMonth();
    this.year = new Date().getFullYear();
    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }
}

