import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[libWeekendDisable]'
})
export class WeekendDisableDirective {

  constructor() { }
@HostListener('click',['$event.target']) 

onClick(ev:Event){
console.log(ev)
var day = new Date("July 9 2022 12:30").getUTCDay();
console.log(day)

  if([6,0].includes(day)){
console.log(day)

    ev.preventDefault();
    // this.value = '';
    alert('Wed  allowed');
  }
}
}
