import { dashboard, root } from './router.custom.config';
import {
  currentAccount,
  entrance,
  notFound,
  result,
} from './router.general.config';

export default [entrance, root, dashboard, currentAccount, result, notFound];
