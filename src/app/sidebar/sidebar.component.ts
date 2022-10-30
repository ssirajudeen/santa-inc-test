import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu_list: any = [];
  hambergerMenu:boolean = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.menu_list = [
      {
        "menu_name": "Toys Factory",
        "url": "toysFactory",
        "icon": "fa-solid fa-gamepad",
      },
      {
        "menu_name": "Delivery",
        "url": "delivery",
        "icon": "fa-solid fa-sleigh",
      },
      {
        "menu_name": "Legal",
        "url": "legal",
        "icon": "fa-solid fa-scale-balanced",
      },
      {
        "menu_name": "Disconnect",
        "url": "disconnect",
        "icon": "fa-solid fa-power-off",
      }
    ];
  }

  // To handle navigation click
  goTo(menu: any) {
    this.router.navigate([menu.url]);
  }
}
