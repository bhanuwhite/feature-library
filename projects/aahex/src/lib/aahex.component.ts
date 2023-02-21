import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'ahx-modal',
  templateUrl: './aahex.component.html',
  styleUrls: ['./aahex.component.scss'],
})
export class AahexComponent implements OnInit {
  @Input() width: string = '50%';
  @Input() backGroundClr: string = 'white';
  /*header*/
  @Input() headerText: string = 'Popupbox';
  @Input() headerColor: string = '#E7E7E7';
  @Input() headerTxtColor: string = '#000080';
  /*footer*/
  @Input() footerColor: string = '#E7E7E7';
  /*button*/
  @Input() saveBtntxt: string = 'Save';
  @Input() saveBtnclr: string = '#000080';
  @Input() cancelBtntxt: string = 'Cancel';
  @Input() saveBtnTxtclr: string = 'white';
  @Input() cancelBtnclr: string = '#E55451';
  @Input() cancelBtnTxtclr: string = 'white';
  /*truefalse*/
  @Input() footer: boolean = true;
  @Input() saveBtn: boolean = true;
  @Input() cancelBtn: boolean = true;
  @Output() save: any = new EventEmitter<any>();
  @Output() cancel: any = new EventEmitter<any>();
  /*alert box*/
  @Input() alert: string = 'Modal';
  @Input() alertMsg: string = 'Alert';
  ngOnInit(): void {}

  close() {
    (document.getElementById('myModal') as HTMLFormElement).style.display =
      'none';
  }

  open() {
    (document.getElementById('myModal') as HTMLFormElement).style.display =
      'block';
  }
  // When the user clicks anywhere outside of the modal, close it
  @HostListener('click', ['$event'])
  onClick(e: any) {
    if (e.target.id == 'myModal') {
      this.close();
    }
  }
}
