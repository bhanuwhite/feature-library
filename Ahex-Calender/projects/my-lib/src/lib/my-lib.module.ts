import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';



@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
