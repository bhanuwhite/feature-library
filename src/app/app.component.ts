import { Component, ViewChild } from '@angular/core';
import { AahexComponent } from 'aahex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'popupbox';
  messageHeader = 'hi i @ am header';
  width: string = '1000px';
  height: string = '30px';
  cancelTxt = 'cancel';
  saveTxt = 'fffave';
  background: any = 'red';
  Alert: any = 'Error';
  @ViewChild(AahexComponent, { static: true })
  ahexpopup!: AahexComponent;
  savebtn: boolean = false;
  cancel() {
    console.log('hii i am cancel button');
    this.ahexpopup.close();
    this.Alert = 'Error';
  }
  save() {
    console.log('hii i am save button');
  }
  clickButton() {
    this.ahexpopup.open();
  }
  onclick(e: any) {
    console.log(e.target.value);
  }
}
