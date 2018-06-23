import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent {

	quantity: number = 0;

	@Output()
	quantityCounter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public increaseQuantity() {
  	this.quantity = this.quantity + 1;
  	this.quantityCounter.emit(this.quantity);
  }

  public decreaseQuantity() {
  	if (this.quantity < 1) {
  		return ;
  	}
  	this.quantity = this.quantity - 1;
  	this.quantityCounter.emit(this.quantity);
  }

}
