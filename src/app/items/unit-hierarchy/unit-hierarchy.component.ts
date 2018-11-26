import { Component, OnInit, Input } from '@angular/core';
import { UnitHierarchy } from 'src/app/model/unitHierarchy.model'

@Component({
  selector: 'app-unit-hierarchy',
  templateUrl: './unit-hierarchy.component.html',
  styleUrls: ['./unit-hierarchy.component.css']
})
export class UnitHierarchyComponent implements OnInit {

  @Input()
  unitHierarchy: UnitHierarchy;
  constructor() { }

  ngOnInit() {
 
  }

}
