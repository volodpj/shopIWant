import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/model/item.model';
import { ItemsService } from 'src/app/service/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  categoryName: any;
  private subscription: Subscription;
  items: Item[] = [];
  itemsSortItemList: Item[] = [];
  
  constructor(private router: ActivatedRoute, private itemService: ItemsService) {
    this.subscription = router.params.subscribe(params => this.categoryName = params['categoryName']);
   }

  ngOnInit() {
    this.items = this.itemService.getItems();
    this.itemsSortItemList = this.itemsSort(this.categoryName, this.items);
  }

  itemsSort(box, serviceItemsArrey){
    let arrey: Item[] = [];
    for(var i = 0; i < serviceItemsArrey.length; i++){
      if(serviceItemsArrey[i]["unitHierarchy"] == box){
        arrey.push(serviceItemsArrey[i]);
      }
    }
    return arrey;
  }
  test(){
    console.log(this.itemsSortItemList)
  }

}
