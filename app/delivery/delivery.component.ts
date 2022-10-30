import { Component, OnInit } from '@angular/core';
import { DeliveryService } from './delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  pageSize = 5;
  page = 4;
  deliveryList = [];
  constructor(private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.deliveryService.getList().subscribe((data) => {
      if (data && data.length) {
        this.deliveryList = JSON.parse(data);
      } else {
        this.deliveryList = [];
      }
    });
  }

}
