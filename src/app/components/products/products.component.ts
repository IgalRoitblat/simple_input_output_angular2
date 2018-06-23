import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
	@Input()
	products: Product[];

	@Output()
	quantityCounter: EventEmitter<object> = new EventEmitter();

  constructor() { }

  public passQuantity(e: object):void {
  	this.quantityCounter.emit(e);
  }


}
