import {Component} from '@angular/core';
import {PRODUCTS} from '../../mock/producst.mock';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent {

  readonly products = PRODUCTS;

  constructor() {
  }

}
