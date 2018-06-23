import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-sum',
  templateUrl: './cart-sum.component.html',
  styleUrls: ['./cart-sum.component.css']
})
export class CartSumComponent {
	@Input() sum: number;

  constructor() { }

}
