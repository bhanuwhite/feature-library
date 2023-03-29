import { Component, Input } from '@angular/core';


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

  constructor() { }
  
  ngOnInit() {  
    this.getDate();
  }

getDate(){
  this.formateDate = this.fromDate.getFullYear() + "-" + ("0" + (this.fromDate.getMonth() + 1)).slice(-2) + "-" + ("0" + this.fromDate.getDate()).slice(-2)
  console.log(this.formateDate);
}

}
