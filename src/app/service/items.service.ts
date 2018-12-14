import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private items: Item[] = [
    new Item("Ноутбук", "http://obod.com.ua/image/data/images/return-box.jpg", 1, true, 190, "Опис товару", "SONY", "Розділ1", "laptop", true, false, true, true),
    new Item("Ноутбук", "http://obod.com.ua/image/data/images/return-box.jpg", 2, true, 190, "Опис товару", "SONY", "Розділ1", "laptop", false, true, true, true),
    new Item("Ноутбук", "http://obod.com.ua/image/data/images/return-box.jpg", 3, true, 190, "Опис товару", "SONY", "Розділ1", "laptop", true, false, true, true),
    new Item("Ноутбук", "http://obod.com.ua/image/data/images/return-box.jpg", 4, true, 190, "Опис товару", "SONY", "Розділ1", "laptop", false, true, true, false),
    new Item("Ноутбук", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "laptop", true, true, true, true),
    new Item("Ноутбук", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "laptop", false, true, true, true),
    new Item("Ноутбук", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "laptop", true, false, true, true),
    new Item("Ноутбук", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "laptop", true, false, true, true),
    new Item("Ноутбук", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "laptop", true, false, true, true),
    new Item("Планшет", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "tablet", true, false, true, true),
    new Item("Планшет", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "tablet", true, false, true, true),
    new Item("Планшет", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "tablet", true, false, true, true),
    new Item("Планшет", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "tablet", true, false, true, true),
    new Item("Планшет", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "tablet", true, false, true, true),
    new Item("Аксесуари", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "computer accessories", true, false, true, true),
  ];

 
  constructor() { }

  getItems(){
    return this.items;
  }


  
}
