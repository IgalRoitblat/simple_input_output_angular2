import { Component, Input } from '@angular/core';

import { Product } from '../../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

	@Input()
	selected: {productIndex: number, productName: string, productPrice: number, quantity: number};

	@Input()
	cartEmpty: boolean;

	public cart: {productIndex: number, productName: string, productPrice: number, quantity: number}[] = [];
	public sum: number;

	onInput():boolean {
		if (this.cartEmpty === false) {
			if (this.cart.length < 1) {
				this.cart.push(this.selected);
				this.updateSum();
				return true;
			}
			for (var i = 0; i < this.cart.length; i++) {
				if (this.selected.productIndex === this.cart[i].productIndex) {
					this.cart[i].quantity = this.selected.quantity;
					this.updateSum();
					return true;
				}
			}
			this.cart.push(this.selected);
			this.updateSum();
			return true;
		}

	}

	updateSum():void {
		this.sum = 0;
		this.cart.forEach(item => {
			this.sum = this.sum + (item.productPrice * item.quantity);
			console.log(this.sum);
		})
	}

  constructor() { }

}
