import { Component } from '@angular/core';
import { PRODUCTS } from '../../mock/producst.mock';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { State } from '../../reducers';
import * as productActions from '../../reducers/products/product.action';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent {
  readonly products = PRODUCTS;
  products$: Observable<ProductModel[]>;
  productSelected$: Observable<ProductModel>;
  productsToBuy$: Observable<ProductModel[]>;
  total$: Observable<number>;

  constructor(private store: Store<State>) {
    this.products$ = store.select((data) => data.products.listProducts);
    this.productSelected$ = store.select(
      (data) => data.products.productSelected
    );
    this.total$ = store.select((data) => data.products.total);
    this.productsToBuy$ = store.select((data) => data.products.productsToBuy);
  }

  openProduct(product: ProductModel) {
    this.store.dispatch(productActions.selectProductAction({ product }));
  }

  addProduct(product: ProductModel) {
    this.store.dispatch(productActions.addProduct({ product }));
  }
}
