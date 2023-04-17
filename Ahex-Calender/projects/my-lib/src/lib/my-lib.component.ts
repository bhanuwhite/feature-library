import { Component, Input } from '@angular/core';
import { Day } from '../lib/model/day.model';
import { MyLibService } from './my-lib.service';


@Component({
  selector: 'lib-my-lib',
  templateUrl: "./my-lib.component.html",
  styleUrls: ["./my-lib.component.scss"],

})
export class MyLibComponent {

  @Input() calHeaderColor: string = "rgb(9,97,146)";
  @Input() calHeaderFontSize: string = "15px";
  @Input() datesBackgroundColor: string = "";
  @Input() weekIndexNumber: any = [0, 6]
  @Input() minDate: any = "2023/04/05";
  @Input() startDate: any = "";
  @Input() endDate: any = "";
  @Input() maxDate: any = "";
  @Input() weekdaysBackgroundColor = ""
  @Input() weekdaysTxtColor: any = ""
  @Input() dates: any = [];
  public monthDays: any = [];
  showMyContainer: boolean = false;
  public monthNumber: any = new Date().getMonth();
  public year: any = new Date().getFullYear() ;
  public weekDaysName = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  currentYear: number;
  currentMonthIndex: number;
  isSameMonth: boolean = false;
  getMonth: any;
  date: Date;
  selectedDate: any;
  myInputValue: any;
  arrayOfDay: any = [];
  arrayOfMonth: any;
  arrayOfYear: any;
  holidays: any = [25,28];
  formattedDate1: any;
  formattedDate2: any;
  todaysDate!: number;
  choosenDate:any;

  constructor(public calendarCreator: MyLibService) {
    this.date = new Date();
    this.currentYear = this.date.getFullYear();
    this.currentMonthIndex = this.date.getMonth();
    this.todaysDate = this.date.getDate();
    
0
  }
  ngOnInit() {
    this.isSameMonth = true;
    this.setMonthDays(this.calendarCreator.getCurrentMonth());
  }

  //for getting next month
  onNextMonth(): void {
    this.monthNumber++;
    if(this.monthNumber == this.currentMonthIndex){
      this.isSameMonth = true;
    }
    else{
      this.isSameMonth = false;
    }
    if (this.monthNumber == 12) {
      this.monthNumber = 0;
      this.year++;
    }
    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
    
  }

  //for getting previous month
  onPreviousMonth(): void {
    this.monthNumber--;
    if(this.monthNumber == this.currentMonthIndex){
      this.isSameMonth = true;
    }
    else{
      this.isSameMonth = false;
    }

    if (this.monthNumber < 1) {
      this.monthNumber = 12;
      this.year--;
    }
    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));

  }

  private setMonthDays(days: Day[]): void {
    //for disabling weekends choosen by user
    days.map((x: any) => {
    x.disable = this.weekIndexNumber.includes(x.weekDayNumber) ? true : false;
    })

    //for giving max date and disabled it
    const maxNumber = new Date(this.maxDate).getDate();
    days.map((y: any) => {
      y.max = (y.number > maxNumber) ? true : false;
    })

    //for giving min Date and disabled it
    const minNumber = new Date(this.minDate).getDate();
    days.map((y: any) => {
      y.min = (y.number < minNumber) ? true : false;
    })
   
    //selecting a range between two dates
    const currentDate = new Date(this.startDate)
     
    //each date added to the dates array
    while (currentDate <= this.endDate) {
        this.dates.push(currentDate.getDate()) 
        
        currentDate.setDate(currentDate.getDate() + 1)
      }
    //for enabling all the range of dates
      days.map((z: any) => {
          z.enable = this.dates.includes(z.number) ? true : false;
        })
      
    //for holidays
    days.map((y: any) => {
      y.holiday = this.holidays.includes(y.number) ? true : false;

    })
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
    console.log(this.monthDays);
  }

  //onclick of date getting date in input field
  onClickDate(day: Day) {
    this.choosenDate = day.number; 
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

  //for closing calendarj
  close(){
    this.monthNumber= new Date().getMonth(); 
     this.year = new Date().getFullYear(); 
     this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year)); 
  }
}  
