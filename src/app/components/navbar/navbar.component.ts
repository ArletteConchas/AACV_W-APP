import { Component, OnInit } from '@angular/core';
import { faCoffee, faTruckPickup, faUser, faShoppingBag, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faTruck = faTruckPickup;
  faUser = faUser;
  faShoppingBag = faShoppingBag;
  faSearch = faSearch;
  faShoppingCart = faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }
  

}
