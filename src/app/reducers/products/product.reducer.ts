import { ProductModel } from '../../models/product.model';
import { PRODUCTS } from '../../mock/producst.mock';
import { createReducer, Action, on } from '@ngrx/store';
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
  total: 0,
};

const productReducer = createReducer(
  initialState,
  on(productActions.selectProductAction, (state, { product }) => ({
    ...state,
    productSelected: product,
  })),
  on(productActions.addProduct, (state, { product }) => {
    const listProducts = state.listProducts.map((prod) =>
      prod.id === product.id ? { ...prod, quantity: prod.quantity + 1 } : prod
    );
    let productsToBuy;
    if (state.productsToBuy.find((prod) => prod.id === product.id)) {
      productsToBuy = state.productsToBuy.map((prod) =>
        prod.id === product.id ? { ...prod, quantity: prod.quantity + 1 } : prod
      );
    } else {
      productsToBuy = [
        ...state.productsToBuy,
        { ...product, quantity: product.quantity + 1 },
      ];
    }
    return {
      ...state,
      listProducts,
      productsToBuy,
      productSelected: { ...product, quantity: product.quantity + 1 },
      total: state.total + product.price,
    };
  }),
  on(productActions.removeProduct, (state, { product }) => {
    if (product.quantity === 0) {
      return { ...state };
    } else {
      const listProducts = state.listProducts.map((prod) =>
        prod.id === product.id ? { ...prod, quantity: prod.quantity - 1 } : prod
      );
      const productsToBuy = state.productsToBuy
        .filter(
          (prod) => !(prod.id === product.id) || !(product.quantity === 1)
        )
        .map((prod) =>
          prod.id === product.id
            ? { ...prod, quantity: prod.quantity - 1 }
            : prod
        );
      return {
        ...state,
        listProducts,
        productsToBuy,
        total: state.total - product.price,
        productSelected: { ...product, quantity: product.quantity - 1 },
      };
    }
  })
);
export function reducer(state: ProductsState, action: Action) {
  return productReducer(state, action);
}
