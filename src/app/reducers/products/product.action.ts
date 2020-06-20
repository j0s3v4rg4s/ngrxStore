import {createAction, props} from '@ngrx/store';
import {ProductModel} from '../../models/product.model';


const group = '[Products]';

export const SELECT_PRODUCT = group + 'select';


export const selectProductAction = createAction(
  SELECT_PRODUCT,
  props<{product: ProductModel}>()
);

