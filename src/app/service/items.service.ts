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
    new Item("Товар6", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "Підрозділ2", false, true, true, true),
    new Item("Товар7", "http://obod.com.ua/image/data/images/return-box.jpg", 5, true, 190, "Опис товару", "SONY", "Розділ1", "Підрозділ2", true, false, true, true),
  ];

 
  constructor() { }

  getItems(){
    return this.items;
  }


  
}
