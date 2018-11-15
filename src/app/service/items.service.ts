import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private items: Item[] = [
    new Item("Товар1", "http://obod.com.ua/image/data/images/return-box.jpg", 1, true, 190, "Опис товару", "SONY", "Розділ1", "Підрозділ2", true, false, true, true),
    new Item("Товар2", "http://obod.com.ua/image/data/images/return-box.jpg", 2, true, 190, "Опис товару", "SONY", "Розділ1", "Підрозділ2", false, true, true, true),
    new Item("Товар3", "http://obod.com.ua/image/data/images/return-box.jpg", 3, true, 190, "Опис товару", "SONY", "Розділ1", "Підрозділ2", true, false, true, true),
    new Item("Товар4", "http://obod.com.ua/image/data/images/return-box.jpg", 4, true, 190, "Опис товару", "SONY", "Розділ1", "Підрозділ2", false, true, true, false),
    new Item("Товар5", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "Підрозділ2", true, true, true, true),
    new Item("Товар5", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "Підрозділ2", true, true, true, true),
    new Item("Товар5", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "Підрозділ2", true, false, true, true),
  ];

  itemsTopTrade: Item[] = [];
  itemsPriceWeek: Item[] = [];
  itemsRecommendation: Item[] = [];
  itemsNew: Item[] = [];
 
  constructor() { }

  getItems(){
    return this.items;
  }

  getItemsTop(){
    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].topTrade){
        this.itemsTopTrade.push(this.items[i]);
      }
    }
    return this.itemsTopTrade
  }

  getItemsPriceWeek(){
    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].priceWeek){
        this.itemsPriceWeek.push(this.items[i]);
      }
    }
    return this.itemsPriceWeek
  }
  
  getItemsRecommendation(){
    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].recommendations){
        this.itemsRecommendation.push(this.items[i]);
      }
    }
    return this.itemsRecommendation;
  }

  getItemsNew(){
    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].newItem){
        this.itemsNew.push(this.items[i]);
      }
    }
    return this.itemsNew;
  }
}
