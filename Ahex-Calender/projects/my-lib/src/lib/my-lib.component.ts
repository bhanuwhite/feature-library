import {  Component, Input } from '@angular/core';


@Component({
  selector: 'lib-my-lib',
  templateUrl: "./my-lib.component.html",
  styleUrls: ["./my-lib.component.scss"],

})
export class MyLibComponent {
  
  givenDate:Date = new Date();
  @Input() fromDate: any;  
  @Input() toDate: any;
  formateDate: any;
  dt:any;
  constructor() { }

  ngOnInit() {  

    this.getDate();
  }
 

getDate(){
  this.formateDate = this.fromDate.getFullYear() + "-" + ("0" + (this.fromDate.getMonth() + 1)).slice(-2) + "-" + ("0" + this.fromDate.getDate()).slice(-2)
}

onClick(e:Event){

 console.log(e)
  // const validate = "2019-06-02" => {
  //   const day = (new Date("2019-06-02")).getDay();
  //   if (day==0 || day==6) {
  //     return false;
  //   }
  //   return true;
  }
  dateSelected(ev:Event): any {
console.log(this.dt)

    const day = (new Date(this.dt)).getDay();

console.log(day)
      // if (day==0 || day==6) {
      //   return false;
      // }
      // return true;
      if([6,0].includes(day)){
        ev.preventDefault();
        this.dt = '';
        alert('Sunday not allowed');
      }
}
}






