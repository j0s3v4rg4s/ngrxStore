import {createAction, props} from '@ngrx/store';
import {ProductModel} from '../../models/product.model';


const group = '[Products]';

export const SELECT_PRODUCT = group + 'select';
export const ADD_PRODUCT = group + 'add';
export const REMOVE_PRODUCT = group + 'remove';


export const selectProductAction = createAction(
  SELECT_PRODUCT,
  props<{ product: ProductModel }>()
);
export const addProduct = createAction(
  ADD_PRODUCT,
  props<{ product: ProductModel }>()
);
export const removeProduct = createAction(
  REMOVE_PRODUCT,
  props<{ product: ProductModel }>()
);


