import { Component, OnInit } from '@angular/core';

import { UnitService } from 'src/app/service/unit.service';
import { UnitHierarchy } from 'src/app/model/unitHierarchy.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-second',
  templateUrl: './main-second.component.html',
  styleUrls: ['./main-second.component.css']
})
export class MainSecondComponent implements OnInit {

  id: any;
  private subscription: Subscription;

  unitHierarchi: UnitHierarchy[] = [];
  unitSortish: UnitHierarchy[] = [];
  constructor(private unitService: UnitService, private router: ActivatedRoute) {
    this.subscription = router.params.subscribe(params => this.id = params['id']); //передача категорії
    //this.id = router.snapshot.params['id'];
   }

  ngOnInit() {
    this.unitHierarchi = this.unitService.getUnitService();
    this.sortUnit(this.id, this.unitHierarchi);
    
  }

  test(){
    console.log(this.id);
    console.log(this.subscription);
  }
  sortUnit(id, unitArrey){
    for(let i = 0; i < unitArrey.length; i++){
      console.log(id);
      if(unitArrey[i][id]){
        this.unitSortish.push(unitArrey[i]);
        console.log(this.unitSortish);
      }
    }
}
}
