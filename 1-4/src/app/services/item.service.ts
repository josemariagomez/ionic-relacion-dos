import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[];

  constructor() {
    this.items = [
      {
        "name": "Pizza",
        "price": 8.90,
        "quantity": 1
      },
      {
        "name": "Coca Cola",
        "price": 1.50,
        "quantity": 1
      },
      {
        "name": "Coca Cola Zero",
        "price": 1.5,
        "quantity": 2
      },
    ]
    this.items.forEach(i => i.total = i.price * i.quantity)
  }

  getItems(): Item[] {
    return this.items;
  }

  getItemByName(name: string): Item {
    return this.items.find(item => item.name == name);
  }

  addItem(item: Item) {
    this.items.push(item);
  }
}