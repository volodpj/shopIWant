import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item.model';
import { ItemsService } from '../service/items.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


items: Item[];
itemsTopTrade: Item[] = [];
itemsPriceWeek: Item[] = [];
itemsRecommendation: Item[] = [];
itemsNew: Item[] = [];

itemsSort(box, serviceItemsArrey){
  let arrey: Item[] = [];
  for(var i = 0; i < serviceItemsArrey.length; i++){
    if(serviceItemsArrey[i][box]){
      arrey.push(serviceItemsArrey[i]);
    }
  }
  return arrey;
}
  constructor(private ItemsService: ItemsService) { }

  ngOnInit() {
    this.items = this.ItemsService.getItems();
    this.itemsTopTrade = this.itemsSort("topTrade", this.items);
    this.itemsPriceWeek = this.itemsSort("priceWeek", this.items);
    this.itemsRecommendation = this.itemsSort("recommendations", this.items);
    this.itemsNew = this.itemsSort("newItem", this.items);
  }

}
