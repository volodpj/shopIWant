import { Component, OnInit } from '@angular/core';

import { UnitService } from 'src/app/service/unit.service';
import { UnitHierarchy } from 'src/app/model/unitHierarchy.model';

@Component({
  selector: 'app-main-second',
  templateUrl: './main-second.component.html',
  styleUrls: ['./main-second.component.css']
})
export class MainSecondComponent implements OnInit {

  unitHierarchi: UnitHierarchy[] = [];
  constructor(private unitService: UnitService) { }

  ngOnInit() {
    this.unitHierarchi = this.unitService.getUnitService();
    console.log(this.unitHierarchi);
  }

}
