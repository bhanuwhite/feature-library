import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MyLibComponent
  ],
  providers: [],
})
export class MyLibModule { }
