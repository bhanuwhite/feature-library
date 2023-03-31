import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyLibComponent } from './my-lib.component';
import { WeekendDisableDirective } from './weekend-disable.directive';



@NgModule({
  declarations: [
    MyLibComponent,
    WeekendDisableDirective
  ],
  imports: [
    CommonModule,
    FormsModule 
  ], 
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
