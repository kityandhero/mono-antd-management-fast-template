import { dashboard, root } from './router.master.custom.config';
import {
  currentAccount,
  entrance,
  notFound,
  result,
} from './router.master.general.config';

export default [entrance, root, dashboard, currentAccount, result, notFound];
