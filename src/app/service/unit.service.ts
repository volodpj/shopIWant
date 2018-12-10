import { Injectable } from '@angular/core';
import { UnitHierarchy } from '../model/unitHierarchy.model';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private unit: UnitHierarchy[] = [
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "Ноутбуки", "computer", "leptop"),
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "Планшети", "computer", "tablet"),
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "Аксесуари для компютерів", "computer", "computer accessories"),
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "Комплектуючі", "computer", "computer component"),
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "Компютери", "computer", "computer"),
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "Програмне забезпечення", "computer", "soft"),
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "Телефони", "pfone", "pfone"),
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "Телевізори", "pfone", "TV"),
  ]
  constructor() { }

  getUnitService(){
    return this.unit;
  }
}
