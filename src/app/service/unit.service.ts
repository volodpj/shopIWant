import { Injectable } from '@angular/core';
import { UnitHierarchy } from '../model/unitHierarchy.model';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private unit: UnitHierarchy[] = [
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "name1", "instrumenty"),
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "name2", "technica"),
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "name3", "instrumenty"),
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "name4", "technica"),
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "name5", "instrumenty"),
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "name6", "technica"),
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "name7", "instrumenty"),
    new UnitHierarchy("https://abinails.com.ua/image/data/zakon/16_1897.jpg", "name8", "instrumenty"),
  ]
  constructor() { }

  getUnitService(){
    return this.unit;
  }
}
