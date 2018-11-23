import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitHierarchyComponent } from './unit-hierarchy.component';

describe('UnitHierarchyComponent', () => {
  let component: UnitHierarchyComponent;
  let fixture: ComponentFixture<UnitHierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitHierarchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
