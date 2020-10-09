import { Component, OnInit } from '@angular/core';
import { faShoppingBag, faEnvelope, faPhone, faMapMarked, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faShoppingBag = faShoppingBag;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMap = faMapMarked;
  faPapperplane = faPaperPlane;
  constructor() { }

  ngOnInit(): void {
  }

}
