import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  templateUrl: "./my-lib.component.html",
  styleUrls: ["./my-lib.component.css"],
})
export class MyLibComponent {
  @Input() user: any;
  @Input() tableWidth: any = '50%';
  @Input() searchWidth: any = '230px';
  @Input() backGroundClr: string = '#fff';
  @Input() headerColor: string = 'black';
  @Input() headerTxtColor: string = 'white';
  @Input() sortIcon:string="fa-solid fa-arrow-up-9-1 ";
  data: any[]=[];
  searchText: any;
  headers: any = [];
  value: any;
  perPage: number = 5;
  startPage: number = 0;
  endPage: number = 5;
  paginationArray: any = [];
  booleanValue: any = false;
  duplicateData: any;
  activeItem: any = this.data;
  activePage:number=1;

  constructor() { }


  ngOnInit() {

console.log(this.activePage)    
    let usersLength = Math.floor(this.user.length / this.perPage)
    for (let i = 0; i < usersLength; i++) {
      this.paginationArray.push(i)
    }
    console.log(this.paginationArray);
    
    this.getData();
    
  }

  // getting Table
  public getData() {
    this.data = this.user;
    this.duplicateData = this.user;
    this.headers = Object.keys(this.data[0]);
  }

  // Searching in Table
  public search(event: any) {
    let searchKey = event.target.value;
    this.data = this.duplicateData;
    let temdata = this.data.filter((x: any) => {
      const value = Object.values(x);
      return new RegExp(searchKey, 'gi').test(value.toString())
    })
    this.data = temdata;
  }

  // Sorting for Table
  sortTable(colName: any) { 
    console.log(colName);
    
    this.data.sort((a, b) => { a = a[colName].toLowerCase(); b = b[colName].toLowerCase()
     return a.localeCompare(b); });
     }
  // this.sortTable('CreatedDate');
//   public sort(key: any, boolean: any) {
// console.log(key,boolean)
//     if (boolean == true) {
//       this.data.sort((a: any, b: any) => a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0)
//       this.booleanValue = !this.booleanValue
//     }
//     else {
//       this.data.sort((a: any, b: any) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)
//       this.booleanValue = !this.booleanValue
//     }
//   }

  // Pagination for Table
  onClick(i: any) {
    this.activePage=i+1;
    this.startPage = i * this.perPage
    this.endPage = (i + 1) * this.perPage
  }

  previous() {
if(this.activePage>1){
  this.activePage=this.activePage-1;
  this.startPage = (this.activePage-1) * this.perPage
    this.endPage = (this.activePage) * this.perPage

}
 
}

next() {
  if ( this.activePage<this.paginationArray.length){
    this.activePage=this.activePage+1;

    this.startPage = (this.activePage-1) * this.perPage
    this.endPage = (this.activePage) * this.perPage
  }
 
   
}

}
