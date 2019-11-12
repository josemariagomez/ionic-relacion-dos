import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  private item: Item;

  constructor(private service: ItemService,
              private router: Router) {
   }

   ngOnInit() {
    this.item = {
      name: "",
      price: 0,
      quantity: 0,
      total: 0
    };
   }

  saveItem() {
    this.item.total = this.item.price * this.item.quantity;
    this.service.addItem(this.item);
    this.router.navigateByUrl('/ej3');
  }
}