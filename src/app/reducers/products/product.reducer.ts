import {ProductModel} from '../../models/product.model';
import {PRODUCTS} from '../../mock/producst.mock';
import { createReducer,  Action, on} from '@ngrx/store';
import * as productActions from './product.action';


export interface ProductsState {
  listProducts: ProductModel[];
  productSelected: ProductModel;
  productsToBuy: ProductModel[];
  total: number;
}

const initialState: ProductsState = {
  listProducts: PRODUCTS,
  productSelected: null,
  productsToBuy: [],
  total: 0
};

const productReducer = createReducer(
  initialState,
  on(productActions.selectProductAction, (state, {product}) => ({...state, productSelected: product}))
);

export function reducer(state: ProductsState, action: Action) {
  return productReducer(state, action);
}

