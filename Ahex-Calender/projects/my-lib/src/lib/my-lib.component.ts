import { Component, Input } from '@angular/core';


@Component({
  selector: 'lib-my-lib',
  templateUrl: "./my-lib.component.html",
  styleUrls: ["./my-lib.component.scss"],

})
export class MyLibComponent {
  givenDate: Date = new Date();
  @Input() fromDate: any;
  @Input() toDate: any;
  formateDate: any;
  picker: any;
  data: any;


  constructor() {
    
   }

  ngOnInit() {
    this.getDate();
    this.isItWeekEnd();

  }

  getDate() {
    
    this.formateDate = this.fromDate.getFullYear() + "-" + ("0" + (this.fromDate.getMonth() + 1)).slice(-2) + "-" + ("0" + this.fromDate.getDate()).slice(-2)
    console.log(this.formateDate);
}
isItWeekEnd(){
    // Everything except weekend days
    const validate = (dateString: any) => {
      const day = (new Date(dateString)).getDay();
      if (day==0 || day==6) { 
        return false;
      }
      return true;
    }
    // Sets the value to '' in case of an invalid date
    (document.querySelector('input') as HTMLInputElement).onchange =(evt:any) => {
      if (!validate(evt.target.value)) {
        evt.target.value = '';
        alert("Weekends are not allowed")
      }                                                                       
    }
 }


  // isItWeekEnd() {
  //   var d = new Date();
  //   var getTot = this.daysInMonth(d.getMonth(), d.getFullYear()); //Get total days in a month
  //   var sat = new Array();   //Declaring array for inserting Saturdays
  //   var sun = new Array();   //Declaring array for inserting Sundays

  //   for (var i = 1; i <= getTot; i++) {    //looping through days in month
  //     var newDate = new Date(d.getFullYear(), d.getMonth(), i)
  //     if (newDate.getDay() == 0) {   //if Sunday
  //       sun.push(i);

  //     }
  //     if (newDate.getDay() == 6) {   //if Saturday
  //       sat.push(i);

  //     }

  //   }
  //   console.log(sat);
  //   console.log(sun);

  // }
  // daysInMonth(month: any, year: any) {
  //   return new Date(year, month, 0).getDate();
  // }
}








