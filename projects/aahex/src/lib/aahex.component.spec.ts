import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AahexComponent } from './aahex.component';

describe('AahexComponent', () => {
  let component: AahexComponent;
  let fixture: ComponentFixture<AahexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AahexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AahexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
