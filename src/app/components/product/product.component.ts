import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

	showQuantity: boolean = false;

	@Input()
	product: Product;

  @Input()
  index: number;

	@Output()
	quantityCounter: EventEmitter<object> = new EventEmitter();


  constructor() { }

  public showQuantityToggle() {
  	this.showQuantity = !this.showQuantity;
  }

  public passQuantity(e: number): void {
  	this.quantityCounter.emit({
      quantity: e,
      productName: this.product.name,
      productPrice: this.product.price,
      productIndex: this.index
    });
  }

}
