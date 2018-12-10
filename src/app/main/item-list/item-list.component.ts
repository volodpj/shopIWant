import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  categoryName: any;
  private subscription: Subscription;
  
  constructor(private router: ActivatedRoute) {
    this.subscription = router.params.subscribe(params => this.categoryName = params['categoryName']);
   }

  ngOnInit() {
  }

  test(){
    console.log(this.categoryName)
  }

}
