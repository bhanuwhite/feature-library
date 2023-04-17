import { Injectable } from '@angular/core';
import { Day } from '../lib/model/day.model';


@Injectable({
  providedIn: 'root'
})
export class MyLibService {
  private currentYear!: number;
  private currentMonthIndex!: number;
  date = new Date();

  constructor() {
    let date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonthIndex = date.getMonth();
  }
  public getCurrentMonth(): Day[] {
    return this.getMonth(this.currentMonthIndex, this.currentYear);
  }

  // ‘getMonth’ create an array of days. 
  //It has two cycles first one create empty days of last month if they are in a first week of a month,
  // second cycle create days of a current month.
  public getMonth(monthIndex: number, year: number): Day[] {
    let days = [];

    let firstday = this.createDay(1, monthIndex, year);

    //create empty days
    for (let i = 1; i < firstday.weekDayNumber; i++) {
      days.push({
        weekDayNumber: i,
        monthIndex: monthIndex,
        year: year,
      } as Day);
    }
    if(firstday.weekDayNumber==0){
      for (let i = 1; i <= 6; i++) {
        days.push({
          weekDayNumber: i,
          monthIndex: monthIndex,
          year: year,
        } as Day);
      }
    }
    days.push(firstday);
    

    let countDaysInMonth = new Date(year, monthIndex, 0).getDate();
    for (let i = 2; i < countDaysInMonth + 1; i++) {
      days.push(this.createDay(i, monthIndex, year));


    }

    return days;
  }
// Function for returning a name of month by index
  public getMonthName(monthIndex: number): string {
    switch (monthIndex) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";

      default:
        return "January";
    }
  }

// Function for returning a name of week by index

  public getWeekDayName(weekDay: number): string {
    switch (weekDay) {
      case 0:
        return "Su"; // Sunday
      case 1:
        return "Mo"; // Monday
      case 2:
        return "Tu"; // Tuesday
      case 3:
        return "We"; // Wednesday
      case 4:
        return "Th"; // Thursday
      case 5:
        return "Fr"; // Friday
      case 6:
        return "Sa"; // Saturday

      default:
        return "";
    }
  }
//‘createDay’ this function initialize our Day model.
  private createDay(dayNumber: number, monthIndex: number, year: number) {
    let day = new Day();


    day.monthIndex = monthIndex;
    day.month = this.getMonthName(monthIndex);

    day.number = dayNumber;


    day.year = year;

    day.weekDayNumber = new Date(year, monthIndex, dayNumber).getDay();
    day.weekDayName = this.getWeekDayName(day.weekDayNumber);


    return day;

  }

}
