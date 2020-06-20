import * as productReducer from './products/product.reducer';
import { ActionReducerMap} from '@ngrx/store';

export interface State {
  products: productReducer.ProductsState;
}

export const reducers: ActionReducerMap<State> = {
  products: productReducer.reducer
};



