import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSecondComponent } from './main-second.component';

describe('MainSecondComponent', () => {
  let component: MainSecondComponent;
  let fixture: ComponentFixture<MainSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
