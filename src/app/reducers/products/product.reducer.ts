import {ProductModel} from '../../models/product.model';
import {PRODUCTS} from '../../mock/producst.mock';
import { createReducer,  Action} from '@ngrx/store';


export interface ProductsState {
  listProducts: ProductModel[];
  productSelected: ProductModel;
  total: number;
}

const initialState: ProductsState = {
  listProducts: PRODUCTS,
  productSelected: null,
  total: 0
};

const productReducer = createReducer(
  initialState
);

export function reducer(state: ProductsState, action: Action) {
  return productReducer(state, action);
}

