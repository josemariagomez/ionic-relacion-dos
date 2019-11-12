import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-ej3',
  templateUrl: './ej3.page.html',
  styleUrls: ['./ej3.page.scss'],
})
export class Ej3Page implements OnInit{

  private items: Item[];
  private total: number;

  constructor(private service: ItemService) {}

  ngOnInit() {
    this.total = 0;
    this.items = this.service.getItems();
  }

  getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total = total + this.items[i].total; 
    }
    return total;
  }
}
