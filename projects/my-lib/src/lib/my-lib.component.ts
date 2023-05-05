import { Component, Input } from '@angular/core';
import { Day } from './modal';
import { MyLibService } from './my-lib.service';
@Component({
  selector: 'lib-my-lib',
  templateUrl: "./my-lib.component.html",
  styleUrls: ["./my-lib.component.css"],

})
export class MyLibComponent {
  public weekDay: number[] = [];
  public holidays: string[] = [];
  public monthDays: any[] = [];
  public showMyContainer: boolean = false;
  public monthNumber: number = new Date().getMonth();
  public year: number = new Date().getFullYear();
  public weekDaysName = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  public myInputValue!: number | string;
  public selectedDate: string = '';
  public minDate: string = '';
  public maxDate: string = '';
  public dates: number[] = [];
  public todaysDate!: number;
  public choosenDate!: number;
  public todaysDateObject = new Date();
  public currentYear = this.todaysDateObject.getFullYear();
  public currentMonthIndex = this.todaysDateObject.getMonth();
  public selectedMonthIndex!: number;
  public isSelecting: boolean = false;
  public selectedRangeOfDates: number[] = [];
  public clickTimer: any;
  @Input() headerBackgroundColor: string = 'blue';
  @Input() weekdaysBackgroundColor: string = 'blue';
  @Input() headerTxtColor: string = 'green';
  @Input() weekdaysTxtColor: string = 'green';
  @Input() prevTxtColor: string = 'green';
  @Input() nextTxtColor: string = 'green';
  @Input() datesBackgroundColor: string = 'white';
  @Input() cancelBtnBackgroundColor: string = 'white';
  @Input() cancelBtnTxtColor: string = 'white';
  isDoubleClicked: boolean = false;
  currentDate!: number;
  endDate!: number;
  startDate!: number;
  startDateMonth!: number;
  endDateMonth!: number;
  monthWithStartDate: boolean = false;
  monthWithEndDate: boolean = false;
  inputStartDate!: string | number;
  inputEndDate!: string;
  constructor(public calendarCreator: MyLibService) { }
  ngOnInit() {
    this.todaysDate = this.todaysDateObject.getDate(); //showing todays date after clicking calendar icon
    this.setMonthDays(this.calendarCreator.getCurrentMonth());
  }
  //On next button click
  onNextMonth(): void {
    if(this.startDate==undefined){
      this.isSelecting=false;
    } else{
      this.isSelecting = true;
    }
    this.monthNumber++;
    // For highlighting todays date
    if (this.monthNumber == this.currentMonthIndex) {
      this.todaysDate = this.todaysDateObject.getDate();
    } else {
      this.todaysDate = 0;
    }
    // For highlighting selected date
    if (this.monthNumber == this.selectedMonthIndex) {
      const selectedDateObject = new Date(this.selectedDate)
      this.choosenDate = selectedDateObject.getDate();
    } else {
      this.choosenDate = 0;
    }
    // When year changed
    if (this.monthNumber == 12) {
      this.monthNumber = 0;
      this.year++;
    }
    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
    if(this.monthNumber==this.startDateMonth && this.monthNumber==this.endDateMonth){
      this.currentDate = this.startDate;
      while (this.currentDate <= this.endDate) {
        this.selectedRangeOfDates.push(this.currentDate);
        this.currentDate = this.currentDate + 1;
      }
      this.monthDays.map((x: any) => {
        x.enable = this.selectedRangeOfDates.includes(x.number) ? true : false
      });
     this.choosenDate=0;
    } else{
      if(this.monthNumber == this.endDateMonth){
        this.monthWithEndDate=true;
          this.choosenDate=0;
        this.selectedRangeOfDates = [];
        this.currentDate = 1;
        while (this.currentDate <= this.endDate) {
          this.selectedRangeOfDates.push(this.currentDate);
          this.currentDate = this.currentDate + 1;
        }
        this.monthDays.map((x: any) => {
          x.enable = this.selectedRangeOfDates.includes(x.number) ? true : false
        })
     
    }
    if(this.monthNumber==this.startDateMonth){
      this.selectedRangeOfDates = [];
      let noOfDaysInMonth = new Date(this.currentYear, this.startDateMonth + 1, 0).getDate();
      this.currentDate = this.startDate;
      while (this.currentDate <= noOfDaysInMonth) {
        this.selectedRangeOfDates.push(this.currentDate);
        this.currentDate = this.currentDate + 1;
      } 
      this.monthDays.map((x: any) => {
        x.enable = this.selectedRangeOfDates.includes(x.number) ? true : false
      })
  }
    } 
   
   


  }
  //On prev button click
  onPreviousMonth(): void {
    this.monthNumber--;
    this.isSelecting = false;

    // For highlighting todays date
    if (this.monthNumber == this.currentMonthIndex) {
      this.todaysDate = this.todaysDateObject.getDate();
    } else {
      this.todaysDate = 0;
    }
    // For highlighting selected date
    if (this.monthNumber == this.selectedMonthIndex) {
      const selectedDateObject = new Date(this.selectedDate)
      this.choosenDate = selectedDateObject.getDate();
    } else {
      this.choosenDate = 0;
    }
    // When year changed
    if (this.monthNumber < 0) {
      this.monthNumber = 11;
      this.year--;
    }
    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
    if(this.monthNumber==this.startDateMonth && this.monthNumber==this.endDateMonth){
      this.currentDate = this.startDate;
      while (this.currentDate <= this.endDate) {
        this.selectedRangeOfDates.push(this.currentDate);
        this.currentDate = this.currentDate + 1;
      }
      this.monthDays.map((x: any) => {
        x.enable = this.selectedRangeOfDates.includes(x.number) ? true : false
      });
     this.choosenDate=0;
    } else{
      if(this.monthNumber==this.startDateMonth){
        this.selectedRangeOfDates = [];
        let noOfDaysInMonth = new Date(this.currentYear, this.startDateMonth + 1, 0).getDate();
        this.currentDate = this.startDate;
        while (this.currentDate <= noOfDaysInMonth) {
          this.selectedRangeOfDates.push(this.currentDate);
          this.currentDate = this.currentDate + 1;
        } 
        this.monthDays.map((x: any) => {
          x.enable = this.selectedRangeOfDates.includes(x.number) ? true : false
        })
    }
    if(this.monthNumber==this.endDateMonth){
      this.choosenDate=0;
      this.selectedRangeOfDates=[];
      this.currentDate = 1;
      while (this.currentDate <= this.endDate) {
        this.selectedRangeOfDates.push(this.currentDate);
        this.currentDate = this.currentDate + 1;
      }
      this.monthDays.map((x: any) => {
        x.enable = this.selectedRangeOfDates.includes(x.number) ? true : false
      })
    }
    }
   

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
  onClickingDate(day: Day) {
    this.clickTimer = setTimeout(() => {
      if (this.isDoubleClicked == false) {
        this.showMyContainer = false;
      }
    }, 250)
    if(this.isSelecting==false){
      this.choosenDate = day.number
      let yr;
      let mnth;
      let dt;
      yr = day.year;
      mnth = day.monthIndex + 1;
      dt = day.number;
      this.selectedDate = mnth + '/' + dt + '/' + yr;
      this.myInputValue = this.selectedDate;
      this.selectedMonthIndex = day.monthIndex
    }
   
  }
  //Functionality for showing current month on clicking calendar icon
  onCalendarIconClick() {
    if (this.selectedDate == '') {
      this.monthNumber = new Date().getMonth();
      this.year = new Date().getFullYear();
      this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
      this.todaysDate = this.todaysDateObject.getDate();
    }
    else {
      const dateObject = new Date(this.selectedDate)
      this.monthNumber = dateObject.getMonth();
      this.year = dateObject.getFullYear();
      this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
      this.choosenDate = dateObject.getDate();
    }
  }
  //To show the selected date in input field of calendar
  onDoubleClickingDate(day: Day) {
    this.isDoubleClicked = true;
    clearTimeout(this.clickTimer);
    //Functionality for enabling range of dates 
    if (this.isSelecting == false) {
      this.startDate = day.number;
      this.startDateMonth = day.monthIndex;
    }
    else {
      this.inputStartDate=this.selectedDate;
      let yr;
      let mnth;
      let dt;
      yr = day.year;
      mnth = day.monthIndex + 1;
      dt = day.number;
      this.inputEndDate = mnth + '/' + dt + '/' + yr;
      this.myInputValue=(this.inputStartDate + '-' + this.inputEndDate);
      this.endDateMonth = day.monthIndex;
      this.endDate = day.number;
      if (this.startDateMonth == this.endDateMonth) {
        this.currentDate = this.startDate;
        while (this.currentDate <= this.endDate) {
          this.selectedRangeOfDates.push(this.currentDate);
          this.currentDate = this.currentDate + 1;
        }
      } else {
        let noOfDaysInMonth = new Date(day.year, day.monthIndex, 0).getDate();
        this.currentDate = this.startDate;
        while (this.currentDate <= noOfDaysInMonth) {
          this.selectedRangeOfDates.push(this.currentDate);
          this.currentDate = this.currentDate + 1;
        }
        if (this.monthWithEndDate == false) {
          this.selectedRangeOfDates = [];
        }
        this.currentDate = 1;
        while (this.currentDate <= this.endDate) {
          this.selectedRangeOfDates.push(this.currentDate);
          this.currentDate = this.currentDate + 1;
        }
      }
      this.monthDays.map((x: any) => {
        x.enable = this.selectedRangeOfDates.includes(x.number) ? true : false
      })
      this.choosenDate = 0;
    }
    this.isSelecting = true;
  }
}

