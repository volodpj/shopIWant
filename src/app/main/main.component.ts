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
  constructor(private ItemsService: ItemsService) { }

  ngOnInit() {
    this.items = this.ItemsService.getItems();
    this.itemsTopTrade = this.ItemsService.getItemsTop();
    this.itemsPriceWeek = this.ItemsService.getItemsPriceWeek();
    this.itemsRecommendation = this.ItemsService.getItemsRecommendation();
    this.itemsNew = this.ItemsService.getItemsNew();

  }

}
