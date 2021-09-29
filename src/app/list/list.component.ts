import { OrderItem, OrderSummary } from './../data-access.service';
import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../data-access.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  orders!: any;
  constructor(private service: DataAccessService) {}

  ngOnInit(): void {
    //get the order summaries
    this.service.orders$.subscribe(response => {
      if (response) {
        this.orders = response;
        //calculate the totals for each order
        this.getOrderTotals();
      }
    });
  }

  getOrderTotals() {
    //loop through each order summary item
    this.orders.forEach((element: any) => {
      let details: OrderItem[];
      let total = 0;

      //retrieve the item details for the current order (passing the element id)
      this.service.orderDetails$(element.id).subscribe(response => {
        if (response) {
          details = response;
          //loop through the item details and add up the total cost
          details.forEach(element => {
            total = total + element.productPrice * element.quantity;
          });
          //set total cost property on element (and round to 2 decimals)
          element.total = total.toFixed(2);
        }
      });
    });
  }
}
