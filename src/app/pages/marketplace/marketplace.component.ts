import {Component} from '@angular/core';
import {PRODUCTS} from '../../mock/producst.mock';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {State} from '../../reducers';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent {

  readonly products = PRODUCTS;
  products$: Observable<ProductModel[]>;

  constructor(private store: Store<State>) {
    this.products$ = store.select(data => data.products.listProducts);
  }

}
